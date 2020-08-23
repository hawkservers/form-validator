import FormValidator from '../index';

test('Create validator constructor', () => {
  const validator = new FormValidator({}, {});

  expect(validator).toBeInstanceOf(FormValidator);
})

test('Create validator statically', () => {
  const validator = FormValidator.validate({}, {});

  expect(validator).toBeInstanceOf(FormValidator);
});

test('Empty schema passes', () => {
  const validator = FormValidator.validate({test: ''}, {});

  expect(validator.test).toBeTruthy();
});
