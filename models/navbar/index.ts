import { NavbarItem, type INavbarItem } from "./Item";

interface INavbar {
  content: INavbarItem;
}

class Navbar {
  content?: NavbarItem;

  constructor(data: Partial<INavbar>) {
    this.content = data.content && new NavbarItem(data.content);
  }

  toJSON() {
    return this;
  }
}

export { type INavbar, Navbar };
