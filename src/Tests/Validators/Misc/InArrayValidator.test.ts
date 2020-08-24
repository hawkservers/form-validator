import InArrayValidator from "../../../Validators/Misc/InArrayValidator";

/**
 * String arrays
 */
test('String array contains value', () => {
  const validator = new InArrayValidator();
  validator.field = 'test';
  validator.value = 'foo';
  validator.params = {arr: ['foo', 'bar']};
  
  expect(() => validator.test()).toBeTruthy();
});

test('String array does not contain value', () => {
  const validator = new InArrayValidator();
  validator.field = 'test';
  validator.value = 'hawk';
  validator.params = {arr: ['foo', 'bar']};
  
  expect(() => validator.test()).toThrow();
});

/**
 * Number arrays
 */
test('Number array contains value', () => {
  const validator = new InArrayValidator();
  validator.field = 'test';
  validator.value = 5;
  validator.params = {arr: [5, 10, 15]};
  
  expect(() => validator.test()).toBeTruthy();
});

test('Number array does not contain value', () => {
  const validator = new InArrayValidator();
  validator.field = 'test';
  validator.value = 3;
  validator.params = {arr: [5, 10, 15]};
  
  expect(() => validator.test()).toThrow();
});