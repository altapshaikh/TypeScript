interface Vehicle{
    specification();
}
class BMW implements Vehicle{

    private _price:number;
    private _color :string;
    private _fuel:string;
    private _mileage:string;

    constructor(price: number, color: string, fuel: string, mileage: string) {
        this._price = price;
        this._color = color;
        this._fuel = fuel;
        this._mileage = mileage;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    get fuel(): string {
        return this._fuel;
    }

    set fuel(value: string) {
        this._fuel = value;
    }

    get mileage(): string {
        return this._mileage;
    }

    set mileage(value: string) {
        this._mileage = value;
    }

    public specification(){
        console.log(`Price : ${this.price}
                     Color : ${this.color}
                     Mileage : ${this.mileage}
                     Fuel : ${this.fuel}`);
    }
}

let car1 = new BMW(1500000,'white','Diesel','10kmpl');
car1.fuel = 'Petrol';
car1.specification();



