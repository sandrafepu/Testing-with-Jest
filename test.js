const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
   let total = sum(14, 9);
   expect(total).toBe(23);
});

const { fromEuroToDollar } = require('./app.js')
test("One euro should be 1.206 dollars", function(){
   expect(fromEuroToDollar(3.5)).toBe(4.2); 
})



