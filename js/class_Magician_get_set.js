import Character from './classmam_Character_get_set';

export default class Magician extends Character {
  constructor(name, distance, stoned, type = 'Magician') {
    super(name, type);
    this.defence = 40;
    this.attack = 100;
    this.distance = distance;
    this.stoned = stoned;
  }
}