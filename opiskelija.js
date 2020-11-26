function opiskelija(etunimi, sukunimi, aloitusvuosi)  {
    this.etunimi = etunimi;
    this.sukunimi = sukunimi;
    this.aloitusvuosi = aloitusvuosi;
    this.palauta_tiedot = function() {
        return this.etunimi + ' ' + this.sukunimi + " aloitusvuosi " + this.aloitusvuosi;
    }
    if (this.aloitusvuosi > 2020) {
        console.log("aloitusvuosi on virheellinen")
    } else {
        console.log("aloitusvuosi on oikein")

    }
}
let opiskelija1 = new opiskelija('maija', 'mallikas', 2021)
console.log(opiskelija1.palauta_tiedot());
