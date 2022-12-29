import Magician from '../class_Magician_get_set';
import Daemon from '../class_Daemon_get_set';

test('class Daemon stoned 0', () => {
  const daemon = new Daemon('daemon', 2);
  daemon.stoned = 0;
  expect(daemon.stoned).toBe(false);
  expect(daemon.attack).toBe(90);
});

test('class Magician stoned 1', () => {
  const magician = new Magician('magician', 5);
  magician.stoned = 1;
  expect(magician.stoned).toBe(true);
  expect(magician.attack).toBe(48);
});

test('class Magician stoned 1 && attack 1', () => {
  const magician = new Magician('magician', 5);
  magician.stoned = 1;
  magician.attack = 1;
  expect(magician.stoned).toBe(true);
  expect(magician.attack).toBe(0);
});