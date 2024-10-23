export interface CountryFlags {
  png: string;
  svg: string;
  alt: string;
}

export interface CountryName {
  common: string;
  official: string;
  nativeName: {
    eng: {
      official: string;
      common: string;
    };
  };
}

export interface Country {
  flags: CountryFlags;
  name: CountryName;
  capital: string[];
  region: string;
  population: number;
}
