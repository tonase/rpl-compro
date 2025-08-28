import { ContentLoginItem, type IContentLoginItem } from "./Item";

interface IContentLogin {
  content: IContentLoginItem;
}

class ContentLogin {
  content?: ContentLoginItem;

  constructor(data: Partial<IContentLogin>) {
    this.content = data.content && new ContentLoginItem(data.content);
  }

  toJSON() {
    return this;
  }
}

export { type IContentLogin, ContentLogin };
