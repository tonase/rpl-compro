import { ItemTitle, type IItemTitle } from "../ItemTitle";

interface IVisionItem {
  lang: string;
  items: IItemTitle[];
}

class VisionItem {
  lang?: string;
  items?: ItemTitle[];

  constructor(data: Partial<IVisionItem>) {
    this.lang = data.lang;
    this.items = Array.isArray(data.items)
      ? data.items?.map((item) => new ItemTitle(item))
      : [];
  }

  toJSON() {
    return this;
  }
}

export { type IVisionItem, VisionItem };
