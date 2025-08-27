interface ITitleOnly {
  language: string;
  lang: string;
  title: string;
}

class TitleOnly {
  language?: string;
  title?: string;

  constructor(data: Partial<ITitleOnly>) {
    this.language = data.language || data.lang;
    this.title = data.title;
  }

  toJSON() {
    return this;
  }
}

export { type ITitleOnly, TitleOnly };
