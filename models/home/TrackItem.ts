interface ITrackItem {
  lang: string;
  title: string;
  placeholder: string;
  btn_search: string;
}

class TrackItem {
  lang?: string;
  title?: string;
  placeholder?: string;
  btnSearch?: string;

  constructor(data: Partial<ITrackItem>) {
    this.lang = data.lang;
    this.title = data.title;
    this.placeholder = data.placeholder;
    this.btnSearch = data.btn_search;
  }

  toJSON() {
    return this;
  }
}

export { type ITrackItem, TrackItem };
