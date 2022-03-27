export default class CovidRest{
    #url
    constructor(url){
        this.#url = url;
    }

    async getResource () {
        const a = this.#url + "cases";
        const response = await fetch(this.#url + "cases");
        if(!response.ok){
            throw new Error(`Could not fetch ${this.#url}, status: ${response.status}`);
        }
        return await response.json();
    }
}
