import Grub from './Grub'

class Bee extends Grub {
  // TODO..
  //constructor extends from grub
  constructor() {
    super(); // 'this' is now equal to a Grub object
    this.age = 5;
    this.color = 'yellow';
    this.job = 'Keep on growing';
  }
};

export default Bee;