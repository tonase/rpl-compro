import { ContentItem, type IContentItem } from "../ContentItem";

interface IAboutTitle {
  attachment: string;
  title: IContentItem;
}

class AboutTitle {
  attachment?: string;
  title?: ContentItem;

  constructor(data: Partial<IAboutTitle>) {
    this.attachment = data.attachment;
    this.title = data.title && new ContentItem(data.title);
  }

  toJSON() {
    return this;
  }
}

export { type IAboutTitle, AboutTitle };
