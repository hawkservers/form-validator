import StartsWithValidator from "../../../Validators/Text/StartsWithValidator";

/**
 * String as start with parameter
 */
test('Correct string start with', () => {
  const validator = new StartsWithValidator();
  validator.field = 'test';
  validator.value = 'foobar';
  validator.params = {startWith: 'foo'};
  
  expect(() => validator.test()).toBeTruthy();
});

test('Incorrect string start with', () => {
  const validator = new StartsWithValidator();
  validator.field = 'test';
  validator.value = 'hawk';
  validator.params = {startWith: 'foo'};
  
  expect(() => validator.test()).toThrow();
});

/**
 * Array as start with parameter
 */
test('Correct array start with', () => {
  const validator = new StartsWithValidator();
  validator.field = 'test';
  validator.value = 'foo';
  validator.params = {startWith: ['foo', 'bar']};
  
  expect(() => validator.test()).toBeTruthy();
});

test('Incorrect array start with', () => {
  const validator = new StartsWithValidator();
  validator.field = 'test';
  validator.value = 'hawk';
  validator.params = {startWith: ['foo', 'bar']};
  
  expect(() => validator.test()).toThrow();
});