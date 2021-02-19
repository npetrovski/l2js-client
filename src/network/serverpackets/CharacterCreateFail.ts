import AbstractNpcInfo from "./AbstractNpcInfo";

export default class CharacterCreateFail extends AbstractNpcInfo {
  // @Override
  readImpl(): boolean {
    const _id: number = this.readC();
    const _reason = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
