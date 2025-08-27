import { ContentItem, type IContentItem } from "./ContentItem";

interface IServiceItem {
  attachment: string;
  original_attachment: string;
  content: IContentItem;
}

class ServiceItem {
  attachment?: string;
  originalAttachment?: string;
  content?: ContentItem;

  constructor(data: Partial<IServiceItem>) {
    this.attachment = data.attachment;
    this.originalAttachment = data.original_attachment;
    this.content = data.content && new ContentItem(data.content);
  }

  toJSON() {
    return this;
  }
}

export { type IServiceItem, ServiceItem };
