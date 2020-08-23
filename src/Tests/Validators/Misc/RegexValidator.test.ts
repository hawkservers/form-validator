import RegexValidator from "../../../Validators/Misc/RegexValidator";

/**
 * Already constructed RegExp
 */
const regexp = RegExp('foo');

test('Matching constructed RegExp', () => {
  const validator = new RegexValidator();
  validator.field = 'test';
  validator.value = 'foo';
  validator.params = {regexp: regexp};
  
  expect(() => validator.test()).toBeTruthy();
});

test('Non-matching constructed RegExp', () => {
  const validator = new RegexValidator();
  validator.field = 'test';
  validator.value = 'bar';
  validator.params = {regexp: regexp};
  
  expect(() => validator.test()).toThrow();
});

/**
 * String RegExp
 */
const stringRegexp = 'foo';

test('Matching string RegExp', () => {
  const validator = new RegexValidator();
  validator.field = 'test';
  validator.value = 'foo';
  validator.params = {regexp: stringRegexp};
  
  expect(() => validator.test()).toBeTruthy();
});

test('Non-matching string RegExp', () => {
  const validator = new RegexValidator();
  validator.field = 'test';
  validator.value = 'bar';
  validator.params = {regexp: stringRegexp};
  
  expect(() => validator.test()).toThrow();
});