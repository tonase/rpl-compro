interface IContactItem {
  lang: string;
  title: string;
  description: string;
  placeholder_name: string;
  placeholder_email: string;
  placeholder_subject: string;
  placeholder_message: string;
  btn_contact: string;
}

class ContactItem {
  lang?: string;
  title?: string;
  description?: string;
  placeholderName?: string;
  placeholderEmail?: string;
  placeholderSubject?: string;
  placeholderMessage?: string;
  btnContact?: string;

  constructor(data: Partial<IContactItem>) {
    this.lang = data.lang;
    this.title = data.title;
    this.description = data.description;
    this.placeholderName = data.placeholder_name;
    this.placeholderEmail = data.placeholder_email;
    this.placeholderSubject = data.placeholder_subject;
    this.placeholderMessage = data.placeholder_message;
    this.btnContact = data.btn_contact;
  }

  toJSON() {
    return this;
  }
}

export { type IContactItem, ContactItem };
