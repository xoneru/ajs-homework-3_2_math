export default class Character {
    constructor(name, type, distance) {
      this.health = 100;
      this.level = 1;
  
      // this.attack = undefined;
      this.defence = undefined;
  
      this.controlCondition(name, type);
  
      this.distance = distance;
      this.stoned = false;
    }
  
    controlCondition(name, type) {
      Character.types = ['Magician', 'Daemon'];
      if (Character.types.includes(type)) {
        this.type = type;
      } else {
        throw new Error('Недопустимый тип игрока');
      }
  
      if (name.length < 2 || name.length > 10) {
        throw new Error('Недопустимая длинна имени игрока');
      } else {
        this.name = name;
      }
    }
  
    // get && set
    set stoned(valueStoned) {
      this.sstoned = valueStoned;
    }
  
    get stoned() {
      return Boolean(this.sstoned);
    }
  
    set attack(valueAttack) {
      this.aattack = valueAttack;
    }
  
    get attack() {
      this.aattack *= (1.1 - 0.1 * this.distance);
      this.aattack = this.stoned ? this.aattack - Math.log2(this.distance) * 5 : this.aattack;
      if (this.aattack < 0) {
        this.aattack = 0;
      }
      return Math.round(this.aattack);
    }
  }