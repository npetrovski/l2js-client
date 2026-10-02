import L2Object from "@entities/L2Object";
import { QuestStepStatus } from "@enums/QuestStepStatus";

export type QuestStep = {
  number: number;
  description: string;
  status: QuestStepStatus;
};

export default class L2Quest extends L2Object {
  State = 0;
  Category = 0;
  StepNames: string[] = [];

  constructor(init?: Partial<L2Quest>) {
    super();
    if (init) {Object.assign(this, init);}
  }

  get IsInProgress(): boolean {
    return this.State > 0;
  }

  get Steps(): QuestStep[] {
    if (this.State <= 0) {
      return [this.createStep(1, QuestStepStatus.Pending)];
    }

    if ((this.State & 0x80000000) !== 0) {
      const mask = this.State & 0x7fffffff;
      let highestBit = 0;
      for (let i = 0; i < 31; i++) {
        if ((mask & (1 << i)) !== 0) {highestBit = i + 1;}
      }

      const steps: QuestStep[] = [];
      for (let i = 1; i <= highestBit; i++) {
        const isSet = (mask & (1 << (i - 1))) !== 0;
        steps.push(this.createStep(i, isSet ? (i === highestBit ? QuestStepStatus.Current : QuestStepStatus.Completed) : QuestStepStatus.Skipped));
      }
      return steps;
    }

    const steps: QuestStep[] = [];
    for (let i = 1; i < this.State; i++) {
      steps.push(this.createStep(i, QuestStepStatus.Completed));
    }
    steps.push(this.createStep(this.State, QuestStepStatus.Current));
    return steps;
  }

  private createStep(number: number, status: QuestStepStatus): QuestStep {
    return {
      number,
      description: this.StepNames[number - 1] || `Step ${number}`,
      status,
    };
  }
}
