// what are classes and objects
    class product {
        name;
        price;
        rating;
        constructor(n, p, r){
            console.log("calling the constructor");
            this.name = n;
            this.price = p;
            this.rating = r;
        }
        display(){
            console.log("displaying the current product",this  );
        }

    }
    const p = new product("Iphone",2323,67876);
    console.log(p);
    p.display();