export type SetState<T> = (partial: T | Partial<T> | ((state: T) => T | Partial<T>), replace?: boolean | undefined) => void

export  type GetState<T> = () => T


export interface record{
    name:string,
    points:number
}

export interface question {
    countries : country[],
        principal : country,
        names: string[],
        corretAnswer?:string,
        userSelecAnswer?:string,
        isCorrectUserAnswer?:boolean,
        currentQuestion?: number
}

export interface country{
    name: Name;
    tld: string[];
    cca2: string;
    ccn3: string;
    cca3: string;
    cioc: string;
    independent: boolean;
    status: string;
    unMember: boolean;
    currencies: Currencies;
    idd: Idd;
    capital: string[];
    altSpellings: string[];
    region: string;
    subregion: string;
    languages: Languages;
    translations: Translations;
    latlng: number[];
    landlocked: boolean;
    borders: string[];
    area: number;
    demonyms: Demonyms;
    flag: string;
    maps: Maps;
    population: number;
    gini: Gini;
    fifa: string;
    car: Car;
    timezones: string[];
    continents: string[];
    flags: Flags;
    coatOfArms: CoatOfArms;
    startOfWeek: string;
    capitalInfo: CapitalInfo;
    postalCode: PostalCode;
}
interface PostalCode {
format: string;
regex: string;
}
interface CapitalInfo {
latlng: number[];
}
interface CoatOfArms {
    png: string;
    svg: string;
}
interface Flags {
    png: string;
    svg: string;
    alt: string;
}
interface Car {
    signs: string[];
    side: string;
}
interface Gini {
    '2019': number;
}
interface Maps {
    googleMaps: string;
    openStreetMaps: string;
}
interface Demonyms {
    eng: Eng;
    fra: Eng;
}
interface Eng {
    f: string;
    m: string;
}
interface Translations {
    ara: Grn;
    bre: Grn;
    ces: Grn;
    cym: Grn;
    deu: Grn;
    est: Grn;
    fin: Grn;
    fra: Grn;
    hrv: Grn;
    hun: Grn;
    ita: Grn;
    jpn: Grn;
    kor: Grn;
    nld: Grn;
    per: Grn;
    pol: Grn;
    por: Grn;
    rus: Grn;
    slk: Grn;
    spa: Grn;
    srp: Grn;
    swe: Grn;
    tur: Grn;
    urd: Grn;
    zho: Grn;
}
interface Languages {
    grn: string;
    spa: string;
}
interface Idd {
    root: string;
    suffixes: string[];
}
interface Currencies {
    ARS: ARS;
}
interface ARS {
    name: string;
    symbol: string;
}
interface Name {
    common: string;
    official: string;
    nativeName: NativeName;
}
interface NativeName {
    grn: Grn;
    spa: Grn;
}
interface Grn {
    official: string;
    common: string;
}