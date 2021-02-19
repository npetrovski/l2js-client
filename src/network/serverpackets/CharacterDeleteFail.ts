import AbstractNpcInfo from "./AbstractNpcInfo";

export default class CharacterDeleteFail extends AbstractNpcInfo {
  // @Override
  readImpl(): boolean {
    const _id: number = this.readC();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
