interface IImageItem {
  image: string;
  original_image: string;
}

class ImageItem {
  image?: string;
  originalImage?: string;

  constructor(data: Partial<IImageItem>) {
    this.image = data.image;
    this.originalImage = data.original_image;
  }

  toJSON() {
    return this;
  }
}

export { type IImageItem, ImageItem };
