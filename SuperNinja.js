const Ninja = require('../ninja/Ninja');

class Sensei extends Ninja{
    constructor(name){
        super(name, 200, 10, 10);
        this.wisdom = 10;
    }
    speakWisdom(){
        super.drinkShake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}

let sensei = new Sensei("Master");
sensei.speakWisdom();
sensei.showStats();



