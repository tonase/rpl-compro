import { ContentItem, type IContentItem } from "../ContentItem";

interface IServiceTitle {
  title: IContentItem;
  attachment: string;
}

class ServiceTitle {
  title?: ContentItem;
  attachment?: string;

  constructor(data: Partial<IServiceTitle>) {
    this.title = data.title && new ContentItem(data.title);
    this.attachment = data.attachment;
  }

  toJSON() {
    return this;
  }
}

export { type IServiceTitle, ServiceTitle };
