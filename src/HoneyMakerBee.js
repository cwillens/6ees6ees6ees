import Bee from './Bee'

class HoneyMakerBee extends Bee { // extend Bee
  // TODO..
  // set properties in constructor
  constructor() {
    super();
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
  }
  // create new methods
  makeHoney() {
    this.honeyPot ++;
  }

  giveHoney() {
    this.honeyPot --;
  }
};

export default HoneyMakerBee;