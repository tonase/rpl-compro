interface INavbarItem {
  lang: string;
  about: string;
  service: string;
  contact: string;
  btn_login: string;
}

class NavbarItem {
  lang?: string;
  about?: string;
  service?: string;
  contact?: string;
  btnLogin?: string;

  constructor(data: Partial<INavbarItem>) {
    this.lang = data.lang;
    this.about = data.about;
    this.service = data.service;
    this.contact = data.contact;
    this.btnLogin = data.btn_login;
  }

  toJSON() {
    return this;
  }
}

export { type INavbarItem, NavbarItem };
