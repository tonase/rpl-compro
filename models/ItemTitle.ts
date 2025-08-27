interface IItemTitle {
  title: string;
}

class ItemTitle {
  title?: string;

  constructor(data: Partial<IItemTitle>) {
    this.title = data.title;
  }

  toJSON() {
    return this;
  }
}

export { type IItemTitle, ItemTitle };
