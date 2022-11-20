import Person from '@/person'

it('should name', () => {
  const person = new Person()
  expect(person.myHelloWorld()).toBe('Hello World!')
})
