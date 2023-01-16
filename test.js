const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
   let total = sum(14, 9);
   expect(total).toBe(23);
});

const { fromEuroToDollar } = require('./app.js')
test("One euro should be 1.206 dollars", function(){
   expect(fromEuroToDollar(3.5)).toBe(4.2); 
})

const {fromDollarToYen} = require('./app.js')
test('One dollar should be 138.88 JPY', function (){
   expect(fromDollarToYen(1)).toBe(138.88);
})

const {fromYenToPound} = require('./app.js')
test('1 yen should be 0.0060 GBP', function (){
   expect(fromYenToPound(1)).toBe(0.0060);
})


