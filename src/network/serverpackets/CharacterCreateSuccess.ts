import AbstractNpcInfo from "./AbstractNpcInfo";

export default class CharacterCreateSuccess extends AbstractNpcInfo {
  // @Override
  readImpl(): boolean {
    const _id: number = this.readC();
    const _dw1 = this.readD();

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
