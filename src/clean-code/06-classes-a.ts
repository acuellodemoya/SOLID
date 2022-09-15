(() => {

    type GENDER = 'M' | 'F'

    class Person{
        constructor(
            public name: string,
            public gender: GENDER,
            public birthday: Date
        ){}
    }

    const newPerson: Person = new Person('Alejandro', 'M', new Date('2000-12-1'))
    console.log(newPerson)
})()