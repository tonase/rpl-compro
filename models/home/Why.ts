import { ContentItem, type IContentItem } from "../ContentItem";

interface IHomeWhy {
  attachment: string;
  content: IContentItem;
}

class HomeWhy {
  attachment?: string;
  content?: ContentItem;

  constructor(data: Partial<IHomeWhy>) {
    this.attachment = data.attachment;
    this.content = data.content && new ContentItem(data.content);
  }

  toJSON() {
    return this;
  }
}

export { type IHomeWhy, HomeWhy };
