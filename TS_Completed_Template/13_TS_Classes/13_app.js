var BMW = (function () {
    function BMW(price, color, fuel, mileage) {
        this._price = price;
        this._color = color;
        this._fuel = fuel;
        this._mileage = mileage;
    }
    Object.defineProperty(BMW.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            this._price = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BMW.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BMW.prototype, "fuel", {
        get: function () {
            return this._fuel;
        },
        set: function (value) {
            this._fuel = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BMW.prototype, "mileage", {
        get: function () {
            return this._mileage;
        },
        set: function (value) {
            this._mileage = value;
        },
        enumerable: true,
        configurable: true
    });
    BMW.prototype.specification = function () {
        console.log("Price : " + this.price + "\n                     Color : " + this.color + "\n                     Mileage : " + this.mileage + "\n                     Fuel : " + this.fuel);
    };
    return BMW;
}());
var car1 = new BMW(1500000, 'white', 'Diesel', '10kmpl');
car1.fuel = 'Petrol';
car1.specification();
