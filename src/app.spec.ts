import Person from '@/app'

it('should name', () => {
  const person = new Person()
  expect(person.myName()).toBe('Felipe')
})
