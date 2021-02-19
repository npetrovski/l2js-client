import AbstractNpcInfo from "./AbstractNpcInfo";

export default class NewCharacterFail extends AbstractNpcInfo {
  // @Override
  readImpl(): boolean {
    const _id = this.readC();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
