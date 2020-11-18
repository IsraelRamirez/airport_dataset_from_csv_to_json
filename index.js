const fs = require('fs')

const exitFileName = '2017.json'
const charDelimited = ','
const inputFileName = './2017.csv'
const cantidadDeFilas = 1000

class data {
    constructor(items) {
        this.FL_DATE = items[0]
        this.OP_CARRIER = items[1]
        this.OP_CARRIER_FL_NUM = parseInt(items[2])
        this.ORIGIN = items[3]
        this.DEST = items[4]
        this.CRS_DEP_TIME = parseInt(items[5])
        this.DEP_TIME = parseFloat(items[6])
        this.DEP_DELAY = parseFloat(items[7])
        this.TAXI_OUT = parseFloat(items[8])
        this.WHEELS_OFF = parseFloat(items[9])
        this.WHEELS_ON = parseFloat(items[10])
        this.TAXI_IN = parseFloat(items[11])
        this.CRS_ARR_TIME = parseInt(items[12])
        this.ARR_TIME = parseFloat(items[13])
        this.ARR_DELAY = parseFloat(items[14])
        this.CANCELLED = parseFloat(items[15])
        this.CANCELLATION_CODE = items[16]
        this.DIVERTED = parseFloat(items[17])
        this.CRS_ELAPSED_TIME = parseFloat(items[18])
        this.ACTUAL_ELAPSED_TIME = parseFloat(items[19])
        this.AIR_TIME = parseFloat(items[20])
        this.DISTANCE = parseFloat(items[21])
        this.CARRIER_DELAY = parseFloat(items[22])
        this.WEATHER_DELAY = parseFloat(items[23])
        this.NAS_DELAY = parseFloat(items[24])
        this.SECURITY_DELAY = parseFloat(items[25])
        this.LATE_AIRCRAFT_DELAY = parseFloat(items[26])
    }
}

fs.readFile(inputFileName, 'utf8', (err, dataFile) => {
    if (err) return new Error(err)
    let fullData = dataFile.split('\n')
    fullData.shift()
    const cant = fullData.length
    let datos = []
    while (fullData.length >= cant - cantidadDeFilas) {
        datos.push(new data(fullData.shift().split(charDelimited).map((item) => { return !item ? 0.0 : item })))
        console.log((datos.length / (cant - cantidadDeFilas)) * 100 + "% completo")
    }

    fs.writeFile(exitFileName, JSON.stringify(datos), function(err) {
        if (err) return console.log(err);
    })
})