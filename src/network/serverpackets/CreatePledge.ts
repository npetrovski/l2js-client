import AbstractNpcInfo from "./AbstractNpcInfo";

export default class CreatePledge extends AbstractNpcInfo {
  // @Override
  readImpl(): boolean {
    const _id: number = this.readC();
    const _success = this.readD() === 1;

    return true;
  }

  // @Override
  run(): void {
    // no-op
  }
}
