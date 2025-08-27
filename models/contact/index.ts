import { ContactItem, type IContactItem } from "./Item";

interface IContact {
  content: IContactItem;
}

class Contact {
  content?: ContactItem;

  constructor(data: Partial<IContact>) {
    this.content = data.content && new ContactItem(data.content);
  }

  toJSON() {
    return this;
  }
}

export { type IContact, Contact };
