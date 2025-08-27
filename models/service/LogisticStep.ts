import { ServiceItem, type IServiceItem } from "../ServiceItem";
import { TitleItem, type ITitleItem } from "../TitleItem";

interface IServiceLogisticStep {
  title: ITitleItem;
  contents: IServiceItem[];
}

class ServiceLogisticStep {
  title?: TitleItem;
  contents?: ServiceItem[];

  constructor(data: Partial<IServiceLogisticStep>) {
    this.title = data.title && new TitleItem(data.title);
    this.contents = Array.isArray(data.contents)
      ? data.contents?.map((item) => new ServiceItem(item))
      : [];
  }

  toJSON() {
    return this;
  }
}

export { type IServiceLogisticStep, ServiceLogisticStep };
