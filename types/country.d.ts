export interface CountryFlags {
  png: string;
  svg: string;
  alt: string;
}

export interface CountryName {
  common: string;
  official: string;
  nativeName: {
    [languageCode: string]: {
      official: string;
      common: string;
    };
  };
}

export interface Currencies {
  [currencyCode: string]: {
    name: string;
    symbol: string;
  };
}

export interface Languages {
  [lanCode: string]: string;
}

export interface Country {
  flags: CountryFlags;
  name: CountryName;
  capital: string[];
  region: string;
  subregion: string;
  population: number;
  currencies: Currencies[];
  tld: string[];
  borders: string[];
  languages: Languages[];
}
