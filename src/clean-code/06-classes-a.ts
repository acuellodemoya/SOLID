(() => {

    //No aplicando el principio de responsabilidad unica.

    type GENDER = 'M' | 'F'

    class Person{
        constructor(
            public name: string,
            public gender: GENDER,
            public birthday: Date
        ){}
    }

    class User extends Person{
        private lastAccess: Date
        constructor(
            
            public email:string,
            public role: string,
            name: string,
            gender: GENDER,
            birthday: Date
        ){
            super(name, gender, birthday)
            this.lastAccess = new Date()
        }

        checkCredentials(){
            return true
        }

    }

    class UserSettings extends User{
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            name: string,
            role: string,
            gender: GENDER,
            birthdate: Date
        ){
            super(email, role, name, gender, birthdate)
        }
    }

    const userSettings = new UserSettings(
        '/urs/home',
        '/home',
        'acuellodmeoya@gmail.com',
        'Alejandro',
        'Admin',
        'M',
        new Date('2000-12-1')
    )

    console.log(userSettings)
    

})()