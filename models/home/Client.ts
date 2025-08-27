import { ImageItem, type IImageItem } from "../ImageItem";
import { TitleOnly, type ITitleOnly } from "../TitleOnly";

interface IHomeClient {
  title: ITitleOnly;
  images: IImageItem[];
}

class HomeClient {
  title?: TitleOnly;
  images?: ImageItem[];

  constructor(data: Partial<IHomeClient>) {
    this.title = data.title && new TitleOnly(data.title);
    this.images = Array.isArray(data.images)
      ? data.images?.map((item) => new ImageItem(item))
      : [];
  }

  toJSON() {
    return this;
  }
}

export { type IHomeClient, HomeClient };
