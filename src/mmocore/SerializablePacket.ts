import Logger from "./Logger";
import { Schema, Stream } from "./schema/Schema";

export default class SerializablePacket {
  protected logger = Logger.getLogger(this.constructor.name);
  protected schema?: ReturnType<typeof Schema>;
  public data: Record<string, unknown> = {};
  public Buffer = new Uint8Array();

  constructor(
    public Name: string,

    schemaJson: { [c: string]: any },

    buffer?: Uint8Array
  ) {
    this.schema = Schema(schemaJson);
    if (buffer) {
      this.Buffer = buffer;
    }
  }

  public get(key: string): unknown {
    if (!(key in this.data)) {
      throw new Error(`Undefined key '${key}' in packet ${this.Name}`);
    }

    return this.data[key];
  }

  public set(key: string, value: unknown): void {
    this.data[key] = value;
  }

  public write(data: Record<string, unknown>): number {
    if (this.schema === undefined) {
      throw new Error(`No schema is defined for packet ${this.Name}`);
    }
    let len = 0;
    try {
      const tmp: number[] = [];
      this.schema.write(data)((byte) => {
        tmp[len++] = byte;
      });
      this.Buffer = Uint8Array.from(tmp);
    } catch (err) {
      throw new Error(`Error in writing ${this.Name}: ${err}`);
    }
    return len;
  }

  public read(): Record<string, unknown> {
    if (this.schema === undefined) {
      throw new Error(`No schema is defined for packet ${this.Name}`);
    }
    if (this.Buffer !== undefined && this.Buffer.byteLength > 0) {
      try {
        this.data = this.schema.read(Stream(this.Buffer)).unwrap();
      } catch (err) {
        throw new Error(`Error in parsing ${this.Name}: ${err}`);
      }
    }

    return this.data;
  }
}
