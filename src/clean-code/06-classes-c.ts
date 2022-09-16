(() => {

    //Aplicando el principio de responsabilidad unica.
    //Priorizar la composición frente a la herencia.

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
    }

    class User{
        private lastAccess: Date
        public email: string
        public role: string

        constructor({
            email,
            role,
        }: UserProps){
            this.lastAccess = new Date()
            this.email = email
            this.role = role
        }

        checkCredentials(){
            return true
        }

    }

    interface SettingsProps {
        workingDirectory: string
        lastOpenFolder: string
    }


    class Settings {

        public workingDirectory: string
        public lastOpenFolder: string

        constructor(
           { workingDirectory,
            lastOpenFolder,
        }: SettingsProps
        ){
            this.workingDirectory = workingDirectory,
            this.lastOpenFolder = lastOpenFolder
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



    class UserSettings{
        public person: Person
        public user: User
        public settings: Settings

        constructor( {
            name, gender, birthdate,
            email, role,
            workingDirectory, lastOpenFolder
        }: UserSettingsProps ){
            this.person = new Person({name, gender, birthdate})
            this.user = new User({email, role})
            this.settings = new Settings({ workingDirectory, lastOpenFolder })
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