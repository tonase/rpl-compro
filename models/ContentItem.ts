interface IContentItem {
  lang: string;
  title: string;
  short_description: string;
}

class ContentItem {
  lang?: string;
  title?: string;
  shortDescription?: string;

  constructor(item: Partial<IContentItem>) {
    this.lang = item.lang;
    this.title = item.title;
    this.shortDescription = item.short_description;
  }

  toJSON() {
    return this;
  }
}

export { type IContentItem, ContentItem };
