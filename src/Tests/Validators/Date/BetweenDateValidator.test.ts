import BetweenValidator from "../../../Validators/Date/BetweenDateValidator";

const from = new Date(1598364010);
const to = new Date(1598364030);

/**
 * Without canEqual
 */
test('Value is between dates', () => {
  const validator = new BetweenValidator();
  validator.field = 'test';
  validator.value = new Date(1598364021);
  validator.params = {from, to};
  
  expect(() => validator.test()).toBeTruthy();
});

test('Value is before from date', () => {
  const validator = new BetweenValidator();
  validator.field = 'test';
  validator.value = new Date(1598364005);
  validator.params = {from, to};
  
  expect(() => validator.test()).toThrow();
});

test('Value is after from date', () => {
  const validator = new BetweenValidator();
  validator.field = 'test';
  validator.value = new Date(1598364032);
  validator.params = {from, to};
  
  expect(() => validator.test()).toThrow();
});

test('Value equals from date without canEqual', () => {
  const validator = new BetweenValidator();
  validator.field = 'test';
  validator.value = from;
  validator.params = {from, to};
  
  expect(() => validator.test()).toThrow();
});

test('Value equals to date without canEqual', () => {
  const validator = new BetweenValidator();
  validator.field = 'test';
  validator.value = to;
  validator.params = {from, to};
  
  expect(() => validator.test()).toThrow();
});

/**
 * With canEqual
 */
test('Value equals from date with canEqual', () => {
  const validator = new BetweenValidator();
  validator.field = 'test';
  validator.value = from;
  validator.params = {from, to, canEqual: true};
  
  expect(() => validator.test()).toBeTruthy();
});

test('Value equals to date with canEqual', () => {
  const validator = new BetweenValidator();
  validator.field = 'test';
  validator.value = to;
  validator.params = {from, to, canEqual: true};
  
  expect(() => validator.test()).toBeTruthy();
});