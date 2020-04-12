export default interface ICommand {
  execute(...args: any[]): void;
}
