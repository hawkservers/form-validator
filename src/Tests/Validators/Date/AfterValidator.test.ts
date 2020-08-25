import AfterValidator from "../../../Validators/Date/AfterValidator";

/**
 * Without canEqual
 */
const date = new Date(1598351461);

test('Value is after date', () => {
  const validator = new AfterValidator();
  validator.field = 'test';
  validator.value = new Date(1598351465);
  validator.params = {date, canEqual: false};
  
  expect(() => validator.test()).toBeTruthy();
});

test('Value is the same date without canEqual', () => {
  const validator = new AfterValidator();
  validator.field = 'test';
  validator.value = date;
  validator.params = {date, canEqual: false};
  
  expect(() => validator.test()).toThrow();
});

test('Value is before date', () => {
  const validator = new AfterValidator();
  validator.field = 'test';
  validator.value = new Date(1598351450);
  validator.params = {date, canEqual: false};
  
  expect(() => validator.test()).toThrow();
});

/**
 * With canEqual
 */

test('Value is the same date with canEqual', () => {
  const validator = new AfterValidator();
  validator.field = 'test';
  validator.value = date;
  validator.params = {date, canEqual: true};
  
  expect(() => validator.test()).toBeTruthy();
});