import ForagerBee from './ForagerBee';

class RetiredForagerBee extends ForagerBee {
  // TODO..
  // constructor
  constructor() {
    super();
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey';
  }

  // methods
  forage() {
    return "I am too old, let me play cards instead";
  }

  gamble(treasure) {
    this.treasureChest.push(treasure);
  }

};

export default RetiredForagerBee;