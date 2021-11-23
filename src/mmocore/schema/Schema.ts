export interface IOption<A> {
  toNullable: () => A | null;
  isSome: () => boolean;
  isNone: () => boolean;
  map: <B>(fn: (a: A) => B) => IOption<B>;
  flatMap: <B>(fn: (a: A) => IOption<B>) => IOption<B>;
}

export function Some<A>(a: A): IOption<A> {
  return {
    toNullable: () => a,
    isSome: () => true,
    isNone: () => false,
    map: <B>(fn: (a: A) => B) => Some<B>(fn(a)),
    flatMap: <B>(fn: (a: A) => IOption<B>) => fn(a),
  };
}

export function None<A>(): IOption<A> {
  return {
    toNullable: () => null,
    isSome: () => false,
    isNone: () => true,
    map: <B>(fn: (a: A) => B) => None<B>(),
    flatMap: <B>(fn: (a: A) => IOption<B>) => None<B>(),
  };
}

export interface IResult<A, E> {
  unwrap: (msg?: string) => A;
  unwrapErr: (msg?: string) => E;
  isOk: () => boolean;
  isBad: () => boolean;
  map: <B>(fn: (a: A) => B) => IResult<B, E>;
  flatMap: <B>(fn: (a: A) => IResult<B, E>) => IResult<B, E>;
}

export function Ok<A, E>(a: A): IResult<A, E> {
  return {
    unwrap: (msg = "") => a,
    unwrapErr: (msg = `Ok(${a})`) => {
      throw new Error(msg);
    },
    isOk: () => true,
    isBad: () => false,
    map: <B>(fn: (a: A) => B) => Ok<B, E>(fn(a)),
    flatMap: <B>(fn: (a: A) => IResult<B, E>) => fn(a),
  };
}

export function Bad<A, E>(e: E): IResult<A, E> {
  return {
    unwrap: (msg = `Error(${e})`) => {
      throw new Error(msg);
    },
    unwrapErr: (msg = "") => e,
    isOk: () => false,
    isBad: () => true,
    map: <B>(fn: (a: A) => B) => Bad<B, E>(e),
    flatMap: <B>(fn: (a: A) => IResult<B, E>) => Bad<B, E>(e),
  };
}

export type ByteStream = () => IOption<number>;

type MetaCondition = {
  $eq?: string | number;
  $neq?: string | number;
  $gt?: string | number;
  $gte?: string | number;
  $lt?: string | number;
  $lte?: string | number;
  $and?: [];
  $or?: [];
};

type IdMeta = { $id: string };

export type Meta = {
  $type: "byte" | "word" | "dword" | "float" | "double" | "ntstring" | "bytes" | "array" | "branch" | Message<any>;
  $default?: number | string | number[];
  $length?: number | IdMeta;
  $id?: string;
  $condition?: string | number | MetaCondition;
  $wrapper?: boolean;
  $schema?: Record<string, Meta>;
};

function isIdMeta(param: any): param is IdMeta {
  if (param !== undefined && !Number.isFinite(param) && "$id" in param) {
    return true;
  }
  return false;
}

function isMetaCondition(param: any): param is MetaCondition {
  return typeof param === "object" && !Array.isArray(param) && param !== null;
}

function testCondition(cond?: number | string | MetaCondition, val?: number | string): boolean {
  if (cond !== undefined && val !== undefined) {
    if (isMetaCondition(cond)) {
      for (const t of Object.keys(cond)) {
        switch (t) {
          case "$eq":
            return val === cond[t];
          case "$neq":
            return val !== cond[t];
          case "$gt":
            return val > (cond[t] as number);
          case "$gte":
            return val >= (cond[t] as number);
          case "$lt":
            return val < (cond[t] as number);
          case "$lte":
            return val <= (cond[t] as number);
          case "$or": {
            let re = false;
            (cond as any)[t].forEach((c: any) => (re = re || testCondition(c, val)));
            return re;
          }
          case "$and": {
            let re = true;
            (cond as any)[t].forEach((c: any) => (re = re && testCondition(c, val)));
            return re;
          }
        }
      }
    } else {
      return cond === val;
    }
  }
  return false;
}

export class Message<T> {
  public meta?: Meta;

  public valueFn?: (u: any) => T;

  public isWrapper = false;

  constructor(
    public read: (r: ByteStream, u?: any) => IResult<T, string>,
    public write: (t: T) => (w: (byte: number) => void) => void,
    public skip: (u?: any) => boolean = () => false
  ) {}

  public value(u: { [c: string]: T }, k: string): T | undefined {
    if (u !== undefined) {
      if (this.valueFn) {
        return this.valueFn(u);
      }

      if (k in u) {
        return u[k];
      }
    }

    if (this.meta && this.meta.$default !== undefined) {
      return this.meta.$default as any;
    }
  }

  public map<U>(fn: (t: T) => U, inv: (u: U) => T): Message<U> {
    return new Message(
      (r) => this.read(r).map(fn),
      (u) => this.write(inv(u))
    );
  }

  public then<U>(fn: (t: T) => Message<U>, inv: (u: U) => T): Message<U> {
    return new Message(
      (r) => {
        const rt = this.read(r);
        if (rt.isBad()) {
          return Bad(rt.unwrapErr());
        } else {
          return fn(rt.unwrap()).read(r);
        }
      },
      (u) => (w) => {
        const t = inv(u);
        this.write(t)(w);
        fn(t).write(u)(w);
      }
    );
  }

  public ensure(
    predicate: (t: T) => boolean,
    errorMessage: (t: T) => string = (t: T) => `Invariant broken by ${t}`
  ): Message<T> {
    return new Message(
      (r) => {
        const rt = this.read(r);
        if (rt.isBad()) return rt;
        const t = rt.unwrap();
        if (!predicate(t)) return Bad(errorMessage(t));
        return Ok(t);
      },
      (t) => {
        if (!predicate(t)) throw new Error(errorMessage(t));
        return this.write(t);
      }
    );
  }
}

const ByteArray = (length: number | IdMeta) =>
  new Message<Uint8Array>(
    (r, k) => {
      const cnt = isIdMeta(length) ? k[length.$id] : length;
      const result = new Uint8Array(cnt);
      for (let i = 0; i < cnt; i++) {
        const byte = r().toNullable();
        if (byte === null) {
          return Bad(`Message ended prematurely: ByteArray(${cnt})`);
        }
        result[i] = byte;
      }
      return Ok(result);
    },
    (u) => (w) => u.forEach(w)
  );

const UInt = (bytes: number) =>
  new Message<number>(
    (r) => {
      let result = 0;
      for (let i = 0; i < bytes; i++) {
        const byte = r().toNullable();
        if (byte === null) {
          return Bad(`Message ended prematurely: UInt(${bytes})`);
        }
        result += byte << (i * 8);
      }
      return Ok(result);
    },
    (u) => (w) => {
      for (let i = 0; i < bytes; i++) {
        w(u % 256);
        u = u >> 8;
      }
    }
  );

const NtString = (): Message<string> =>
  new Message<string>(
    (r) => {
      let result = "";

      for (;;) {
        const b1 = r().toNullable();
        const b2 = r().toNullable();
        if (b1 === null || b2 == null) {
          return Bad(`Message ended prematurely: NtString()`);
        }
        const c = b1 + (b2 << 8);
        if (c === 0) break;
        result += String.fromCharCode(c);
      }
      return Ok(result);
    },
    (u) => (w) => {
      if (u.length > 0) {
        const ww = (k: number) => {
          w(k % 256);
          w(k >>> 8);
        };
        for (let i = 0; i < u.length; ++i) {
          ww(u.charCodeAt(i));
        }
        ww(0); // null termination
      }
    }
  );

const List = <T>(sub: Message<T>, len: number | IdMeta) =>
  new Message<T[]>(
    (r, k) => {
      const result = [] as T[];
      const cnt = isIdMeta(len) ? k[len.$id] : len;
      if (cnt && cnt > 0) {
        for (let i = 0; i < cnt; i++) {
          const v = sub.read(r);
          if (v.isBad()) {
            return Bad(`(${v.unwrapErr()})`);
          }
          result.push(v.unwrap() as T);
        }
      }
      return Ok(result);
    },
    (u) => (w) => {
      if (u === undefined) {
        [...Array(len)].map(() => sub.write(u as any)(w));
      } else {
        return Array.isArray(u) && u.forEach((c) => sub.write(c)(w));
      }
    }
  );

const Branch = <T>(sub: Message<T>, id: string, condition: string | number | MetaCondition | undefined) =>
  new Message<T>(
    (r) => {
      const v = sub.read(r);
      if (v.isBad()) {
        return Bad(`(${v.unwrapErr()})`);
      }
      return Ok(v.unwrap() as T);
    },
    (u) => (w) => sub.write(u)(w),
    (k) => !testCondition(condition, k[id])
  );

const Double64 = () => {
  const pow2 = (n: number) => (n >= 0 && n < 31 ? 1 << n : Math.pow(2, n));
  return new Message<number>(
    (r) => {
      const rDWord = () => {
        let tmp = 0;
        for (let i = 0; i < 4; i++) {
          const byte = r().toNullable();
          if (byte === null) {
            throw new Error(`Message ended prematurely: Double64()`);
          }
          tmp += byte << (i * 8);
        }
        return tmp;
      };
      try {
        return Ok(rDWord() + pow2(32) * rDWord());
      } catch (err) {
        return Bad((err as Error).message);
      }
    },
    (u) => (w) => {
      const hi = Math.floor(u / pow2(32));
      const lo = u - hi * pow2(32);
      const wDWord = (p: number) => {
        for (let i = 0; i < 4; i++) {
          w(p % 256);
          p = p >> 8;
        }
      };
      wDWord(lo);
      wDWord(hi);
    }
  );
};

const Float64 = () => {
  return new Message<number>(
    (r) => {
      const buf = new Uint8Array(8);
      for (let i = 0; i < 8; i++) {
        const byte = r().toNullable();
        if (byte === null) {
          return Bad(`Message ended prematurely: Float64()`);
        }
        buf[i] = byte;
      }
      return Ok(new DataView(buf.buffer).getFloat64(0, true));
    },
    (u) => (w) => {
      const buf = new Uint8Array(8);
      new DataView(buf.buffer).setFloat64(0, u, true);
      for (let i = 0; i < 8; i++) w(buf[i]);
    }
  );
};

export const Schema = <T, K extends keyof T>(schema: Record<string, Meta>): Message<{ [P in K]: T[P] }> => {
  const record = {} as any;

  for (const key of Object.keys(schema)) {
    const meta = schema[key];

    if (meta.$type instanceof Message) {
      record[key] = meta.$type;
    } else {
      switch (meta.$type) {
        case "byte":
          record[key] = UInt(1);
          break;
        case "word":
          record[key] = UInt(2);
          break;
        case "dword":
          record[key] = UInt(4);
          break;
        case "double":
          record[key] = Double64();
          break;
        case "float":
          record[key] = Float64();
          break;
        case "ntstring":
          record[key] = NtString();
          break;
        case "bytes":
          if (meta.$length !== undefined) {
            record[key] = ByteArray(meta.$length);
          }
          break;
        case "array":
          if (meta.$length !== undefined) {
            record[key] = List(Schema(meta.$schema as { [P in K]: Meta }), meta.$length);
          }
          break;
        case "branch":
          if (meta.$id !== undefined) {
            record[key] = Branch(Schema(meta.$schema as { [P in K]: Meta }), meta.$id, meta.$condition);
            record[key].isWrapper = true;
          }
          break;
      }
    }

    if ("$wrapper" in meta && meta.$wrapper) {
      record[key].isWrapper = true;
    }

    if (isIdMeta(meta.$length)) {
      record[meta.$length.$id as K].valueFn = (u: any) => (key in u ? u[key].length : 0);
    }

    if (key in record && null !== record[key]) {
      record[key].meta = meta;
    }
  }

  return new Message<{ [P in K]: T[P] }>(
    (r) => {
      let u = {} as { [P in K]: T[P] };
      for (const key of Object.keys(record)) {
        const message = record[key as K] as Message<T[K]>;
        if (message.skip(u)) continue;

        const v = message.read(r, u);

        if (v.isBad()) {
          return Bad(`(${v.unwrapErr()}) at ${key}`);
        }
        if (message.isWrapper) {
          u = { ...u, ...v.unwrap() };
        } else {
          u[key as K] = v.unwrap();
        }
      }
      return Ok(u);
    },
    (u) => (w) => {
      for (const key of Object.keys(record)) {
        const message = record[key as K];
        if (message.skip(u)) continue;
        if (message.isWrapper) {
          message.write(u as any)(w);
        } else message.write(message.value(u, key) as T[K])(w);
      }
    }
  );
};

export const Stream = (array: Uint8Array): ByteStream => {
  let position = 0;
  return () => {
    if (position >= array.length) {
      return None();
    } else {
      position++;
      return Some(array[position - 1]);
    }
  };
};
