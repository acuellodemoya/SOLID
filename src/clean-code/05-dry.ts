type SIZE = '' | 'S' | 'M' | 'XL'

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: SIZE = ''
    ){}

    isProductReady(): boolean{
        for(const key in this){
            switch(typeof this[key]){
                case 'string':
                    if((<string><unknown>this[key]).length<= 0) throw new Error(`${key} is empty`)
                    break
                case 'number':
                    if((<number><unknown>this[key]) <= 0) throw new Error(`${key} is Zero`)
                    break
                
                    default:
                        throw Error(`${typeof key} is not supported`)

            }
        }

    return true
    }

    toString(){
        //No DRY
        //if(this.name.length <= 0) throw Error('Name is empty')
        //if(this.price <= 0) throw Error('Price is Zero')
        //if(this.size.length <= 0) throw Error('Size is empty')
        if(!this.isProductReady()) return
        return `${this.name} (${this.price}), ${this.size}`
    }
}

(()=> {
    const bluePants = new Product('BLue Large Pants', 10)
    console.log(bluePants.toString())
})()