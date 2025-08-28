interface IContentLoginItem {
  lang: string;
  title: string;
  description: string;
  placeholder_email: string;
  placeholder_password: string;
  btn_login: string;
}

class ContentLoginItem {
  lang?: string;
  title?: string;
  description?: string;
  placeholderEmail?: string;
  placeholderPassword?: string;
  btnLogin?: string;

  constructor(data: Partial<IContentLoginItem>) {
    this.lang = data.lang;
    this.title = data.title;
    this.description = data.description;
    this.placeholderEmail = data.placeholder_email;
    this.placeholderPassword = data.placeholder_password;
    this.btnLogin = data.btn_login;
  }

  toJSON() {
    return this;
  }
}

export { type IContentLoginItem, ContentLoginItem };
