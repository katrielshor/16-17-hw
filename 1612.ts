//קלאס נותן מבנה קבוע שעליו ניתן להוסיף נתונים

 class Point {
   x: number
   y: number
 
  constructor(x?: number, y?: number){
      this.x = x
      this.y = y
  }


   draw() {
       console.log(`x: ${this.x}, y: ${this.y}`);   
   }
   getDistance () {
       console.log("distance");
       
   }
}


let point = new Point(1, 6)
point.x = 1
point.y = 2
point.draw()

let point2 = new Point(5, 8)
point2.x = 3
point2.y = 6

point2.draw()

//
class Car {
    model: string = "none"
    klm: number = 0
    year: number = 0
    price: number = 0
    color: string = "none"

    constructor(model: string, klm: number, year: number, price?: number, color?: string){
         this.model = model
         this.klm = klm
         this.year = year
         this.price = price
         this.color = color
    }

    showCar(): void {
        console.log(`model: ${this.model},  klm: ${this.klm}, year: ${this.year}`);
        
    }
}



let car1 = new Car("bmw", 85000, undefined)
car1.showCar()

class Shortcar {
    constructor(private model: string, private klm: number, private year: number, price?: number, color?: string){}
    display(){
        console.log(this);
        console.log(this.klm * 2);
    }

}

let newcar = new Shortcar("ford", 30000, 2020, )
newcar.display()



//hw 17

class Book {
    constructor(private  name: string,
                private  autorName: string,
                private Against: string,
                private price: number
                ) {}
                displaybook(){
                    console.log(this);
                }
                tax  (){
                    console.log(this.price * 0.17);
                }

}


let newbook = new Book ("life", "adam", "topbook", 100)
console.log(newbook.tax());


//hw16
//ex1
let car: object = {
    brand: "ford",
    nodel: "mustang",
    price: 4
}
//ex2.1
const getRandomArbitrary = (min: number, max: number) => {

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
}

console.log(getRandomArbitrary(400, 500));

//ex2.2

const getarrey = (size: number) => {
    let varArrey: number[] = []
    for(let i= 0; i < size; i++){
    varArrey.push(getRandomArbitrary(400, 500))
    }
    console.log(varArrey);
}

getarrey(12)
//ex2.3
let user: number= +prompt("enter number")!
getarrey(user)


 

