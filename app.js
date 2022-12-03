console.log("Hello World")

const sum = (a,b) => {
   return a + b
}
console.log(sum(7,3))

// module.exports = { sum };

let oneEuroIs = {
   "JPY": 127.9, // japan yen
   "USD": 1.2, // us dollar
   "GBP": 0.8, // british pound
}
function fromEuroToDollar(euro) {
   return euro * oneEuroIs.USD;
}

// module.exports = {fromEuroToDollar};

// module.exports = { sum, fromEuroToDollar }

function fromDollarToYen(dollar) {
   return dollar * oneDollargit.JPY;
}

function fromYenToPound(yen) {
   return yen * oneYenIs.GBP;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }

