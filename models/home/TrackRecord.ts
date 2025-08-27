import { TitleOnly, type ITitleOnly } from "../TitleOnly";
import { TrackRecordItem, type ITrackRecordItem } from "./TrackRecordItem";

interface IHomeTrackRecord {
  title: ITitleOnly;
  track_record: ITrackRecordItem[];
}

class HomeTrackRecord {
  title?: TitleOnly;
  trackRecord?: TrackRecordItem[];

  constructor(data: Partial<IHomeTrackRecord>) {
    this.title = data.title && new TitleOnly(data.title);
    this.trackRecord = Array.isArray(data.track_record)
      ? data.track_record?.map((item) => new TrackRecordItem(item))
      : [];
  }

  toJSON() {
    return this;
  }
}

export { type IHomeTrackRecord, HomeTrackRecord };
