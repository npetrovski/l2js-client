const big0 = BigInt(0);
const big1 = BigInt(1);
const big2 = BigInt(2);
const big8 = BigInt(8);

/**
 * Absolute value. abs(a)==a if a>=0. abs(a)==-a if a<0
 *
 * @param a
 *
 * @returns The absolute value of a
 */
export function abs(a: number | bigint): number | bigint {
  return a >= 0 ? a : -a;
}

export interface Egcd {
  g: bigint;
  x: bigint;
  y: bigint;
}
/**
 * An iterative implementation of the extended euclidean algorithm or extended greatest common divisor algorithm.
 * Take positive integers a, b as input, and return a triple (g, x, y), such that ax + by = g = gcd(a, b).
 *
 * @param a
 * @param b
 *
 * @throws {RangeError}
 * This exception is thrown if a or b are less than 0
 *
 * @returns A triple (g, x, y), such that ax + by = g = gcd(a, b).
 */
export function eGcd(a: number | bigint, b: number | bigint): Egcd {
  if (typeof a === "number") a = BigInt(a);
  if (typeof b === "number") b = BigInt(b);

  if (a <= big0 || b <= big0) throw new RangeError("a and b MUST be > 0"); // a and b MUST be positive

  let x = big0;
  let y = big1;
  let u = big1;
  let v = big0;

  while (a !== big0) {
    const q = b / a;
    const r: bigint = b % a;
    const m = x - u * q;
    const n = y - v * q;
    b = a;
    a = r;
    x = u;
    y = v;
    u = m;
    v = n;
  }
  return {
    g: b,
    x,
    y,
  };
}

/**
 * Greatest-common divisor of two integers based on the iterative binary algorithm.
 *
 * @param a
 * @param b
 *
 * @returns The greatest common divisor of a and b
 */
export function gcd(a: number | bigint, b: number | bigint): bigint {
  let aAbs = typeof a === "number" ? BigInt(abs(a)) : (abs(a) as bigint);
  let bAbs = typeof b === "number" ? BigInt(abs(b)) : (abs(b) as bigint);

  if (aAbs === big0) {
    return bAbs;
  } else if (bAbs === big0) {
    return aAbs;
  }

  let shift = big0;
  while (((aAbs | bAbs) & big1) === big0) {
    aAbs >>= big1;
    bAbs >>= big1;
    shift++;
  }
  while ((aAbs & big1) === big0) aAbs >>= big1;
  do {
    while ((bAbs & big1) === big0) bAbs >>= big1;
    if (aAbs > bAbs) {
      const x = aAbs;
      aAbs = bAbs;
      bAbs = x;
    }
    bAbs -= aAbs;
  } while (bAbs !== big0);

  // rescale
  return aAbs << shift;
}

/**
 * The least common multiple computed as abs(a*b)/gcd(a,b)
 * @param a
 * @param b
 *
 * @returns The least common multiple of a and b
 */
export function lcm(a: number | bigint, b: number | bigint): bigint {
  if (typeof a === "number") a = BigInt(a);
  if (typeof b === "number") b = BigInt(b);

  if (a === big0 && b === big0) return big0;
  return (abs(a * b) as bigint) / gcd(a, b);
}

/**
 * Maximum. max(a,b)==a if a>=b. max(a,b)==b if a<=b
 *
 * @param a
 * @param b
 *
 * @returns Maximum of numbers a and b
 */
export function max(a: number | bigint, b: number | bigint): number | bigint {
  return a >= b ? a : b;
}

/**
 * Minimum. min(a,b)==b if a>=b. min(a,b)==a if a<=b
 *
 * @param a
 * @param b
 *
 * @returns Minimum of numbers a and b
 */
export function min(a: number | bigint, b: number | bigint): number | bigint {
  return a >= b ? b : a;
}
/**
 * Finds the smallest positive element that is congruent to a in modulo n
 *
 * @remarks
 * a and b must be the same type, either number or bigint
 *
 * @param a - An integer
 * @param n - The modulo
 *
 * @throws {RangeError}
 * Exception thrown when n is not > 0
 *
 * @returns A bigint with the smallest positive representation of a modulo n
 */
export function toZn(a: number | bigint, n: number | bigint): bigint {
  if (typeof a === "number") a = BigInt(a);
  if (typeof n === "number") n = BigInt(n);

  if (n <= big0) {
    throw new RangeError("n must be > 0");
  }

  const aZn = a % n;
  return aZn < big0 ? aZn + n : aZn;
}
/**
 * Modular inverse.
 *
 * @param a The number to find an inverse for
 * @param n The modulo
 *
 * @throws {RangeError}
 * Exception thrown when a does not have inverse modulo n
 *
 * @returns The inverse modulo n
 */
export function modInv(a: number | bigint, n: number | bigint): bigint {
  const egcd = eGcd(toZn(a, n), n);
  if (egcd.g !== big1) {
    throw new RangeError(`${a.toString()} does not have inverse modulo ${n.toString()}`); // modular inverse does not exist
  } else {
    return toZn(egcd.x, n);
  }
}
/**
 * Modular exponentiation b**e mod n. Currently using the right-to-left binary method
 *
 * @param b base
 * @param e exponent
 * @param n modulo
 *
 * @throws {RangeError}
 * Exception thrown when n is not > 0
 *
 * @returns b**e mod n
 */
export function modPow(b: number | bigint, e: number | bigint, n: number | bigint): bigint {
  if (typeof b === "number") b = BigInt(b);
  if (typeof e === "number") e = BigInt(e);
  if (typeof n === "number") n = BigInt(n);

  if (n <= big0) {
    throw new RangeError("n must be > 0");
  } else if (n === big1) {
    return big0;
  }

  b = toZn(b, n);

  if (e < big0) {
    return modInv(modPow(b, abs(e), n), n);
  }

  const pow = (left: bigint, right: bigint) => {
    if (right < 0) {
      throw new RangeError("Exponent must be positive");
    }
    if (!right) {
      return ++right;
    }
    let result: any = left;
    while (--right) result *= left;
    return result;
  };

  let r = big1;
  while (e > 0) {
    if (e % big2 === big1) {
      r = (r * b) % n;
    }
    e = e / big2;
    // b = b ** big2 % n;
    b = pow(b, big2) % n;
  }
  return r;
}

export function bigToUint8Array(big: bigint): Uint8Array {
  if (big < big0) {
    const bits: bigint = (BigInt(big.toString(2).length) / big8 + big1) * big8;
    const prefix1: bigint = big1 << bits;
    big += prefix1;
  }
  let hex = big.toString(16);
  if (hex.length % 2) {
    hex = "0" + hex;
  }
  const len = hex.length / 2;
  const u8 = new Uint8Array(len);
  let i = 0;
  let j = 0;
  while (i < len) {
    u8[i] = parseInt(hex.slice(j, j + 2), 16);
    i += 1;
    j += 2;
  }
  return u8;
}
