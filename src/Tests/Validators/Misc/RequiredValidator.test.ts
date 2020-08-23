import RequiredValidator from '../../../Validators/Misc/RequiredValidator';

/**
 * Strings
 */
test('String with text', () => {
  const validator = new RequiredValidator();

  validator.field = 'Text';
  validator.value = 'Hello jest';

  expect(() => validator.test()).toBeTruthy();
});

test('Empty string', () => {
  const validator = new RequiredValidator();

  validator.field = 'Empty';
  validator.value = '';

  expect(() => validator.test()).toThrow();
});

/**
 * Numbers
 */
test('Number not zero', () => {
  const validator = new RequiredValidator();

  validator.field = 'Not zero';
  validator.value = 10;

  expect(() => validator.test()).toBeTruthy();
});

test('Number negative', () => {
  const validator = new RequiredValidator();

  validator.field = 'Not zero';
  validator.value = -10;

  expect(() => validator.test()).toBeTruthy();
});

test('Number zero', () => {
  const validator = new RequiredValidator();

  validator.field = 'Zero';
  validator.value = 0;

  expect(() => validator.test()).toThrow();
});

/**
 * Arrays
 */
test('Array', () => {
  const validator = new RequiredValidator();

  validator.field = 'Array';
  validator.value = [1];

  expect(() => validator.test()).toBeTruthy();
});

test('Empty array', () => {
  const validator = new RequiredValidator();

  validator.field = 'Array';
  validator.value = [];

  expect(() => validator.test()).toThrow();
});

/**
 * Objects
 */
test('Object', () => {
  const validator = new RequiredValidator();

  validator.field = 'Object';
  validator.value = {test: 1};

  expect(() => validator.test()).toBeTruthy();
});

test('Empty object', () => {
  const validator = new RequiredValidator();

  validator.field = 'Object';
  validator.value = {};

  expect(() => validator.test()).toThrow();
});
