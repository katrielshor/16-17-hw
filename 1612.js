//קלאס נותן מבנה קבוע שעליו ניתן להוסיף נתונים
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("x: ".concat(this.x, ", y: ").concat(this.y));
    };
    Point.prototype.getDistance = function () {
        console.log("distance");
    };
    return Point;
}());
var point = new Point(1, 6);
point.x = 1;
point.y = 2;
point.draw();
var point2 = new Point(5, 8);
point2.x = 3;
point2.y = 6;
point2.draw();
//
var Car = /** @class */ (function () {
    function Car(model, klm, year, price, color) {
        this.model = "none";
        this.klm = 0;
        this.year = 0;
        this.price = 0;
        this.color = "none";
        this.model = model;
        this.klm = klm;
        this.year = year;
        this.price = price;
        this.color = color;
    }
    Car.prototype.showCar = function () {
        console.log("model: ".concat(this.model, ",  klm: ").concat(this.klm, ", year: ").concat(this.year));
    };
    return Car;
}());
var car1 = new Car("bmw", 85000, undefined);
car1.showCar();
var Shortcar = /** @class */ (function () {
    function Shortcar(model, klm, year, price, color) {
        this.model = model;
        this.klm = klm;
        this.year = year;
    }
    Shortcar.prototype.display = function () {
        console.log(this);
        console.log(this.klm * 2);
    };
    return Shortcar;
}());
var newcar = new Shortcar("ford", 30000, 2020);
newcar.display();
//hw 17
var Book = /** @class */ (function () {
    function Book(name, autorName, Against, price) {
        this.name = name;
        this.autorName = autorName;
        this.Against = Against;
        this.price = price;
    }
    Book.prototype.displaybook = function () {
        console.log(this);
    };
    Book.prototype.tax = function () {
        console.log(this.price * 0.17);
    };
    return Book;
}());
var newbook = new Book("life", "adam", "topbook", 100);
console.log(newbook.tax());
//hw16
//ex1
var car = {
    brand: "ford",
    nodel: "mustang",
    price: 4
};
//ex2.1
var getRandomArbitrary = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};
console.log(getRandomArbitrary(400, 500));
//ex2.2
var getarrey = function (size) {
    var varArrey = [];
    for (var i = 0; i < size; i++) {
        varArrey.push(getRandomArbitrary(400, 500));
    }
    console.log(varArrey);
};
getarrey(12);
//ex2.3
var user = +prompt("enter number");
getarrey(user);
