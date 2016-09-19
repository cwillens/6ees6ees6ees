import Bee from './Bee'

class ForagerBee extends Bee { // get the methods from Bee
  // TODO..
  //something unknown tbd
  //properties that are new
  //methods
  constructor() {
    // at this point, 'this' is not anything
    super(); // something
    // 'this' is now an instance of the superclass
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  }
  forage(treasure) {
    this.treasureChest.push(treasure);
  } 
};

export default ForagerBee;


