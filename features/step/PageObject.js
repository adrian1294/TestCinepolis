'use strict';
class cinepolisHome{
    constructor(){
        this.URL = "http://www.cinepolis.com/";
        // this.URL2 = "http://cinepolis.com/cartelera/san-pedro/cinepolis-san-pedro";
        this.inputCity = "#cmbCiudades";
        this.inputPlace = "#cmbComplejos";
        // this.closeBtn = ".takeover-close";
    }

    getUrl() {
        return this.URL
    }
    getUrl2() {
        return this.URL2
    }
    getCity() {
        return this.inputCity
    }

    getPlace() {
        return this.inputPlace
    }
}
export default new cinepolisHome();
// export
// class cinepolisCartelera{
//     constructor(URL){
//     this.URL = "http://cinepolis.com/cartelera/san-pedro/";
//     }
// }