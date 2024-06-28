const sum = require('./sum');

test('Adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3)
 })

test('Multipy 2 * 3 to equal 6', () => {
    expect(multipy(2,2)).toBe(6)
 })

 test('Devide 10 + 2 to equal 5', () => {
    expect(devide(10,2)).toBe(5)
 })

 test('Devide 10 + 2 to equal 5', () => {
   expect(devide(10,0)).toThrow("Cannot devide by zero")
})