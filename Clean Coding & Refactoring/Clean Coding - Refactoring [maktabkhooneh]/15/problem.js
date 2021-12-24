// Bad
class Car {
    constructor(make, model, color){
        this.make = make;
        this.model = model;
        this.color = color;
    }

    setMake(make){
        this.make = make;
    }

    setModel(model){
        this.model = model;
    }

    setColor(color){
        this.color = color;
    }

    save(){
        console.log(this.make, this.model, this.color);
    }
}

const car = new Car("Ford", "F-150", "red");
car.setColor("pink");
car.save();