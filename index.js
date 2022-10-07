const soap = require('soap')
const url = 'http://www.dneonline.com/calculator.asmx?WSDL'

if (process.argv.includes('describe')) {
    describe()
} else if (process.argv.includes('add')) {
    add(10, 20)
} else if (process.argv.includes('subtract')) {
    subtract(10, 20)
} else if (process.argv.includes('multiply')) {
    multiply(20, 10)
} else if (process.argv.includes('divide')) {
    divide(30, 15)
}

function describe() {
    soap.createClient(url, (err, client) => {
        if (err) console.error(err)
    
        console.log(client.describe().Calculator.CalculatorSoap)
    })
}

function add(intA, intB) {
    soap.createClient(url, (err, client) => {
        if (err) console.error(err)
    
        client.Add({ intA, intB }, (err, result) => {
            if (err) return console.log(err)
    
            console.log(result.AddResult)
        })
    })
}

function subtract(intA, intB) {
    soap.createClient(url, (err, client) => {
        if (err) console.error(err)
    
        client.Subtract({ intA, intB }, (err, result) => {
            if (err) return console.log(err)
    
            console.log(result.SubtractResult)
        })
    })
}

function multiply(intA, intB) {
    soap.createClient(url, (err, client) => {
        if (err) console.error(err)
    
        client.Multiply({ intA, intB }, (err, result) => {
            if (err) return console.log(err)
    
            console.log(result.MultiplyResult)
        })
    })
}

function divide(intA, intB) {
    soap.createClient(url, (err, client) => {
        if (err) console.error(err)
    
        client.Divide({ intA, intB }, (err, result) => {
            if (err) return console.log(err)
    
            console.log(result.DivideResult)
        })
    })
}
