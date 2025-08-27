import { LoginItem, type ILoginItem } from "./Item";

interface ILogin {
  content: ILoginItem;
}

class Login {
  content?: LoginItem;

  constructor(data: Partial<ILogin>) {
    this.content = data.content && new LoginItem(data.content);
  }

  toJSON() {
    return this;
  }
}

export { type ILogin, Login };
