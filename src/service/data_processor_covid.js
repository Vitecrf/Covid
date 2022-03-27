//Data Processor
export  default class DataProcessorCovid{
    #covidData;
    #groupedContinentData
    #countryNames
    #history
    constructor(covidData){
    this.#covidData = covidData;
    }


    async getGroupingContinent() {
        // this.#getCountrysNames();
        const continentCases = await this.#covidData;
         const continentData = Object.values(continentCases).map(i => i.All).filter(c => !!c.continent);
          this.#groupedContinentData = _.groupBy(continentData, "continent");
          const res = this.getStatisticsContinents();
          return res;
    }

    async getStatisticsContinents(){

        const continentCases = await this.#groupedContinentData;
        console.dir(continentCases)
        const res = Object.values(continentCases).map(i => {
            const populationTotal = Object.values(i).map(p => p.population).filter(a => a !== undefined).reduce((acc, index) => acc + index, 0);
            const confirmedTotal = Object.values(i).map(p => p.confirmed).filter(a => a !== undefined).reduce((acc, index) => acc + index, 0);
            const deathsTotal = Object.values(i).map(p => p.deaths).filter(a => a !== undefined).reduce((acc, index) => acc + index, 0);
            const dataTest = Object.values(i).map(a => a.updated).filter(i => i !== undefined);
            const set = new Set(dataTest);
            const updatedDate = set.values().next().value;
            const percentConfirmed = this.#getStatisticsContinents(confirmedTotal, populationTotal)
            const percentDeaths = this.#getStatisticsContinents(deathsTotal, populationTotal)

            return {
                continent: i[0].continent,
                percentConfirmed: percentConfirmed,
                percentDeaths: percentDeaths,
                updated: updatedDate
            }
        })
        return res;
    }
    #getStatisticsContinents(a, b){
        const res = +((a * 100) / b).toFixed(2);
        return  res && res != Infinity ? res : "нет данных";

    }

    async getCountrysNames(){
        const contrysNames = await this.#covidData;
        const res = Object.keys(contrysNames).map(i => i);
        return res;
    }

    getDatesCases(country, interval){
        const history = fetch(`https://covid-api.mmediagroup.fr/v1/history?country=${country}&status=deaths`)
            .then(data => data.json())
            .then(data => data.All)
            .then(data => data.dates)
            .then(dates => dates);
        this.#history = history;
        this.getHistoryCasesStatistics(interval);

        return true;
    }

    async getHistoryCasesStatistics(interval){
        const res = await this.#history
        const a = Object.entries(res).map(i => {

            return {
                fromDate: a,
                toDate: d,
                number: s
            }
        })
    console.log(a);
        return true;
    }

}
