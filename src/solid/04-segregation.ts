

interface Bird{
    eat(): void
}

interface FlyingBird{
    fly(): void
}

interface SwimmingBird{
    swim(): void
}

interface Runningbird{
    run(): void
}

class Tucan implements Bird, FlyingBird{
    public fly(): void{}
    public eat(): void{}
}


class Humminbird implements Bird, FlyingBird{
    public fly(): void{}
    public eat(): void{}
}

class Ostrich implements Bird, Runningbird{
    public eat(): void{}
    public run(): void{}
}

class Penguin implements Bird, SwimmingBird{
    public eat(): void{}
    public swim(): void{}
}