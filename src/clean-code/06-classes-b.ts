(() => {

    //No plicando el principio de responsabilidad unica.
    // Forma organizada

    type GENDER = 'M' | 'F'

    interface PersonProps {
        name: string
        gender: GENDER
        birthdate: Date
    }

    class Person{

        public name: string
        public gender: GENDER
        public birthdate: Date

        constructor({ name, gender, birthdate, }: PersonProps){
            this.name = name
            this.gender = gender,
            this.birthdate = birthdate
        }
    }

    interface UserProps {
        email:string
        role: string
        name: string
        gender: GENDER
        birthdate: Date
    }

    class User extends Person{
        private lastAccess: Date
        public email: string
        public role: string

        constructor({
            email,
            role,
            name,
            gender,
            birthdate
        }: UserProps){
            super({name, gender, birthdate})
            this.lastAccess = new Date()
            this.email = email
            this.role = role
        }

        checkCredentials(){
            return true
        }

    }

    interface UserSettingsProps {
        workingDirectory: string
        lastOpenFolder: string
        email: string
        name: string
        role: string
        gender: GENDER
        birthdate: Date 
    }


    class UserSettings extends User{

        public workingDirectory: string
        public lastOpenFolder: string

        constructor(
           { workingDirectory,
            lastOpenFolder,
            email,
            name ,
            role ,
            gender ,
            birthdate, }: UserSettingsProps
        ){
            super({email, role, name, gender, birthdate})
            this.workingDirectory = workingDirectory,
            this.lastOpenFolder = lastOpenFolder
        }
    }

    const userSettings = new UserSettings({
        workingDirectory: '/urs/home',
        lastOpenFolder: '/home',
        email: 'acuellodmeoya@gmail.com',
        name: 'Alejandro',
        role: 'Admin',
        gender: 'M',
        birthdate: new Date('2000-12-1')
    })

    console.log(userSettings)

})()