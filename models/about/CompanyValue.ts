import { ServiceItem, type IServiceItem } from "../ServiceItem";
import { TitleItem, type ITitleItem } from "../TitleItem";

interface IAboutCompanyValue {
  title: ITitleItem;
  contents: IServiceItem[];
}

class AboutCompanyValue {
  title?: TitleItem;
  contents?: ServiceItem[];

  constructor(data: Partial<IAboutCompanyValue>) {
    this.title = data.title && new TitleItem(data.title);
    this.contents = Array.isArray(data.contents)
      ? data.contents?.map((item) => new ServiceItem(item))
      : [];
  }

  toJSON() {
    return this;
  }
}

export { type IAboutCompanyValue, AboutCompanyValue };
