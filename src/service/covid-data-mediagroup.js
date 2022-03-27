//Data Provisioning

// export default class CovidDataMediaGroup {
//     #baseUrl
//     #timestamp
//     #groupedContinentData
//     constructor(url) {
//         this.#baseUrl = url;
//     }


    // localStorage.setItem('data', new Date());
    // dataResponse = await fetch(this.#baseUrl + 'cases');
    // }
    // async getContinentCases(){
    //     const timeNow = new Date().getTime();
    //     if(!this.#groupedContinentData || timeNow > this.#timesstamp + 3600000){
    //         await this.fetchData();
    //         this.#timestamp = timeNow;
    //     }
    // }

   //  async getContinentCases(){
   //      const timeNow = new Date().getTime();
   //      if(!this.#groupedContinentData || timeNow > this.#timestamp + 3600000){
   //          this.#groupedContinentData = await this.fetchData();
   //          this.#timestamp = timeNow;
   //      }
   //      console.log(this.#groupedContinentData)
   //      return this.#groupedContinentData
   //  }
   //
   //
   // async fetchData() {
           // const dateGet = localStorage.getItem("data");
           // if((localStorage.getItem("data")) && (Date.parse(dateGet) + TIMESET) < Date.parse(new Date())){
           //         fetch(this.#baseUrl + 'cases')
           //         .then(data => data.json())
           //         .then(data => localStorage.setItem('covid', JSON.stringify(data)))
           //         localStorage.setItem('data', new Date());
           // } else if(!localStorage.getItem("data")) {
           //     localStorage.setItem('data', new Date());
           //         fetch(this.#baseUrl + 'cases')
           //             .then(data => data.json())
           //             .then(data => localStorage.setItem('covid', JSON.stringify(data)));
           // }
       //     let res = localStorage.getItem('covid');
       //    console.log(typeof res)
       //    res = JSON.parse(res);
       //    console.log(typeof res)
       //    console.log(res)
       //     const a = Object.entries(res);
       // console.log(a)
       // console.log(a[0].All.country)
       //    const b = Object.values(a).map(i => i)
       //
       //
       //     console.log(a)
       // console.log(b)
       // }


       // console.log()
   //         const dataResponse = await fetch(this.#baseUrl + 'cases');   //получили json -> string
   //         const data = await dataResponse.json();              //превратили -> object
   //          const con = Object.values(data).map(i => i.All).filter(c => !!c.continent)
   //
   //         const continentData = Object.values(data).map(i => i.All).filter(c => !!c.continent);
   //     return this.#groupedContinentData = _.groupBy(continentData, "continent");
   // }




// }
