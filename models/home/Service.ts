import { ServiceItem, type IServiceItem } from "../ServiceItem";
import { TitleItem, type ITitleItem } from "../TitleItem";

interface IHomeService {
  attachment: string;
  title: ITitleItem;
  services: IServiceItem[];
}

class HomeService {
  attachment?: string;
  title?: TitleItem;
  services?: ServiceItem[];

  constructor(data: Partial<IHomeService>) {
    this.attachment = data.attachment;
    this.title = data.title && new TitleItem(data.title);
    this.services = Array.isArray(data.services)
      ? data.services?.map((item) => new ServiceItem(item))
      : [];
  }

  toJSON() {
    return this;
  }
}

export { type IHomeService, HomeService };
