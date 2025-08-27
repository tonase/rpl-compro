import { TitleItem, type ITitleItem } from "../TitleItem";

interface IHomeTitle {
  attachment: string;
  title: ITitleItem;
}

class HomeTitle {
  attachment?: string;
  title?: TitleItem;

  constructor(data: Partial<IHomeTitle>) {
    this.attachment = data.attachment;
    this.title = data.title && new TitleItem(data.title);
  }

  toJSON() {
    return this;
  }
}

export { type IHomeTitle, HomeTitle };
