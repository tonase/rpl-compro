interface ILoginItem {
  lang: string;
  title: string;
  description: string;
  placeholder_email: string;
  placeholder_password: string;
  btn_login: string;
}

class LoginItem {
  lang?: string;
  title?: string;
  description?: string;
  placeholderEmail?: string;
  placeholderPassword?: string;
  btnLogin?: string;

  constructor(data: Partial<ILoginItem>) {
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

export { type ILoginItem, LoginItem };
