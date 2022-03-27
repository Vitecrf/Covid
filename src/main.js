import _ from 'lodash';
import CovidDataMediaGroup from "./service/covid-data-mediagroup";
import TableHandler from "./ui/table_handler";
import DataProcessorCovid from "./service/data_processor_covid";
import NavigatorButtons from "./ui/navigator_buttons";
import {dataProvider} from "./config/services-config";
import FormHandler from "./ui/form_handler";

// const dataProvider = new CovidDataMediaGroup(URL);
//
// console.log(dataProvider)
// const dataProcessor = new DataProcessorCovid();
// dataProvider.getContinentCases().then(data => console.log(localStorage.getItem('covid')))
// dataProvider.getContinentCases().then(data => console.log(data));

// const a = new CovidRest();
// )
// console.log(dataProvider.getContinentCases());

// const a = dataProvider.getContinentCases();
// a.then(a => console.log(a))

const navigator = new NavigatorButtons(["0", "1", "2", "3"]);

const dataProcessor = new DataProcessorCovid(dataProvider.getResource());

const tableHandler = new TableHandler([
    {key: 'continent', displayName: 'Continent Name'},
    {key: 'percentConfirmed', displayName: 'Percent of the confirmed cases from the population'},
    {key: 'percentDeaths', displayName: 'Percent of the death cases from the population'},
    {key: 'updated', displayName: 'Date Updated'}
], "courses-table")

const formHandler = new FormHandler("courses-form", "alert");

dataProcessor.getCountrysNames().then(countries =>
    formHandler.fillOptions("country-name-options", countries))
formHandler.fillOptions("period-options", [30, 60, 90, 180])
formHandler.addHandler(data => {

})


function hide(){
    tableHandler.hideTable();
    formHandler.hide();
}
// dataProcessor.getDatesCases("Germany", 10);

window.showContinents = async () => {
    hide();
    navigator.setActive(0)
    tableHandler.showTable(await dataProcessor.getGroupingContinent());
}

window.showFormConfig = () => {
    hide();
    navigator.setActive(1);
    formHandler.show();
}

window.showHoursStatistics = async () => {
    hide();
    navigator.setActive(2);
    await dataProcessor.getDatesCases("Germany", 10);
}

window.showCostStatistics = () => {
    hide();
    navigator.setActive(3);

}
