interface ILanguage {
  code: LanguageCode;
  label: string;
  shortLabel: string;
  icon: string;
}

type LanguageCode = "id" | "en";

class Language {
  static ENGLISH: ILanguage = {
    code: "en",
    label: "English",
    shortLabel: "EN",
    icon: "/images/flags/US.png",
  };

  static INDONESIAN: ILanguage = {
    code: "id",
    label: "Bahasa Indonesia",
    shortLabel: "ID",
    icon: "/images/flags/ID.png",
  };

  static values: ILanguage[] = [Language.INDONESIAN, Language.ENGLISH];

  static parse(code: LanguageCode): ILanguage {
    return (
      Language.values.find((language) => language.code === code) ||
      Language.ENGLISH
    );
  }
}

export { type ILanguage, type LanguageCode, Language };
