const {
returnTwo,
greeting,
add,
subtract,
multiply,
divide
} = require('./functions')
test('Check the return of add', function(){
expect(add(10,5)).toEqual(15)
})
test('Find value of greeting',function(){
expect(greeting('Joe mama')).toBe('Hello Joe mama')
})
test('Find value of greeting',function(){
expect(returnTwo()).toBe(2)
    })