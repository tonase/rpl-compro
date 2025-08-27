import { TitleOnly, type ITitleOnly } from "../TitleOnly";
import { VisionItem, type IVisionItem } from "./VisionItem";

interface IAboutVision {
  vision_title: ITitleOnly;
  vision_items: IVisionItem;
  attachment: string;
}

class AboutVision {
  vision_title?: TitleOnly;
  vision_items?: VisionItem;
  attachment?: string;

  constructor(data: Partial<IAboutVision>) {
    this.vision_title = data.vision_title && new TitleOnly(data.vision_title);
    this.vision_items = data.vision_items && new VisionItem(data.vision_items);
    this.attachment = data.attachment;
  }

  toJSON() {
    return this;
  }
}

export { type IAboutVision, AboutVision };
