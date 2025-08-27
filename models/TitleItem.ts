interface ITitleItem {
  lang: string;
  title: string;
  description: string;
}

class TitleItem {
  lang?: string;
  title?: string;
  description?: string;

  constructor(item: Partial<ITitleItem>) {
    this.lang = item.lang;
    this.title = item.title;
    this.description = item.description;
  }

  toJSON() {
    return this;
  }
}

export { type ITitleItem, TitleItem };
