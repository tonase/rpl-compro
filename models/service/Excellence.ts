import { ServiceItem, type IServiceItem } from "../ServiceItem";
import { TitleItem, type ITitleItem } from "../TitleItem";

interface IServiceExcellence {
  title: ITitleItem;
  contents: IServiceItem[];
}

class ServiceExcellence {
  title?: TitleItem;
  contents?: ServiceItem[];

  constructor(data: Partial<IServiceExcellence>) {
    this.title = data.title && new TitleItem(data.title);
    this.contents = Array.isArray(data.contents)
      ? data.contents?.map((item) => new ServiceItem(item))
      : [];
  }

  toJSON() {
    return this;
  }
}

export { type IServiceExcellence, ServiceExcellence };
