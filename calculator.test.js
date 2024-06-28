const {calculate} = require('./calculate');

test('add 1+2 to equal 3', () => {
     expect(calculate(1, 2,3)).toBe(4.5); 
})

test('add 1+2 to equal 3', () => {
   expect(calculate(5, 10, 15)).toBe(112.5); 
})

test('add 1+2 to equal 3', () => {
   expect(calculate(10, 20, 30)).toBe(150); 
})
    