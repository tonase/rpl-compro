interface ILanguage {
  id: number;
  description: string;
  code: string;
  logo: string;
}

type LanguageCode = "id" | "en";

class Language {
  id?: number;
  description?: string;
  code?: string;
  logo?: string;

  constructor(data: Partial<ILanguage>) {
    this.id = data.id;
    this.description = data.description;
    this.code = data.code;
    this.logo = data.logo;
  }

  toJSON() {
    return this;
  }

  get lowerCode() {
    return this.code?.toLowerCase();
  }
}

export { type ILanguage, type LanguageCode, Language };
