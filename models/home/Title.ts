import { TitleItem, type ITitleItem } from "../TitleItem";
import { TrackItem, type ITrackItem } from "./TrackItem";

interface IHomeTitle {
  attachment: string;
  title: ITitleItem;
  track: ITrackItem;
}

class HomeTitle {
  attachment?: string;
  title?: TitleItem;
  track?: TrackItem;

  constructor(data: Partial<IHomeTitle>) {
    this.attachment = data.attachment;
    this.title = data.title && new TitleItem(data.title);
    this.track = data.track && new TrackItem(data.track);
  }

  toJSON() {
    return this;
  }
}

export { type IHomeTitle, HomeTitle };
