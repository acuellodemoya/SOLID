//Principio de resonabilidad única

(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    class ProductService{
        getProduct( id: number) {
            // Realiza un proceso para obtener el producto y retornarlo
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }

        saveProduct(product: Product) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product );
        }
    }

    class Mailer{

        private masterEmail: string = 'acuellodmeoya@gmail.com'


        sendEmail(emailList: string[], template: 'to-clients' | 'to-admins') {
            console.log('Enviando correo a los clientes', template);
        }
    }

    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {


        constructor(
            private productService: ProductService = new ProductService(),
            private mailer: Mailer = new Mailer(),
        ){}


        loadProduct( id: number ) {
            this.productService.getProduct(id)
        }

        saveProduct( product: Product ) {
            this.productService.saveProduct( product )
        }

        notifyClients(){
            this.mailer.sendEmail(['hola@hola.com'], 'to-clients')
        }



    }

    class CartBloc{

        private items: Object[] = []

        onAddToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    }



    const productBloc = new ProductBloc();
    const cartBloc = new CartBloc();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.onAddToCart(10);


})();