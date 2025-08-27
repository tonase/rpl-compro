import { TitleItem, type ITitleItem } from "../TitleItem";

interface IAboutBody {
  content: ITitleItem;
}

class AboutBody {
  content?: TitleItem;

  constructor(data: Partial<IAboutBody>) {
    this.content = data.content && new TitleItem(data.content);
  }

  toJSON() {
    return this;
  }
}

export { type IAboutBody, AboutBody };
