class Vehicle {
    constructor(make, model, year, color, mileage) {
        this.make = Ford;
        this.model = F150;
        this.year = 2018;
        this.color = Blue;
        this.passenger = 6;
        this.speed = 120;
        this.mileage = mileage;
        this.started = false;
        this.numberOfWheels = 4;
        this.fuel = 100
    }

    accelerate() {
        if (this.started) {
            if (this.fuel > 0) {
                console.log(this.speed += 1);
                this.fuel = this.fuel - 1;
            } else {
                console.log("out of fuel.");
                this.stop();
            }
        } else {
            alert("You need to start the engine first.");
        }
    }

    decelerate() {
        if (this.started) {
            if (this.fuel > 0) {
                if (this.speed > 0) {
                    console.log(this.speed -= 1);
                    this.fuel = this.fuel - 1;
                } else {
                    console.log(this + " has stopped moving");
                    this.fuel = this.fuel - 1;
                }
            } else {
                console.log("out of fuel.");
                this.stop();
            }
        } else {
            alert("You need to start the engine first.");
        }
    }

    stop() {
        console.log('engine off')
        this.started = false;
    }

    typeOfVehicle() {
        if (this.numberOfWheels == 8) {
            console.log(this.model + " " + this.make + " is a Truck");
        } else if (this.numberOfWheels == 4) {
            console.log(this.model + " " + this.make + " is a Car");
        } else if (this.numberOfWheels == 2) {
            console.log(this.model + " " + this.make + " is a Bike");
        } else {
            console.log("Car");
        }
    }
}
module.exports = { Vehicle }