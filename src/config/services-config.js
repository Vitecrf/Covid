import CovidRest from "../service/covid_rest";

export const URL = 'https://covid-api.mmediagroup.fr/v1/';
export const dataProvider = new CovidRest(URL);

