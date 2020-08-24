import EmailValidator from "../../../Validators/Text/EmailValidator";

/**
 * Default emails
 */
test('Email with only letters', () => {
  const validator = new EmailValidator();
  validator.field = '';
  validator.value = 'jack@jackgamesftw.com';
  
  expect(() => validator.test()).toBeTruthy();
});

test('Email with letters and numbers', () => {
  const validator = new EmailValidator();
  validator.field = 'test';
  validator.value = 'stubbo24@stubbo.com';
  
  expect(() => validator.test()).toBeTruthy();
});

test('Email with dots', () => {
  const validator = new EmailValidator();
  validator.field = 'test';
  validator.value = 'zeo.wham@gmail.com';
  
  expect(() => validator.test()).toBeTruthy();
});

test('Email with dots and numbers', () => {
  const validator = new EmailValidator();
  validator.field = 'test';
  validator.value = 'hawk.servers2@gmail.com';
  
  expect(() => validator.test()).toBeTruthy();
});

test('Email with dots, numbers and dashes in the domain', () => {
  const validator = new EmailValidator();
  validator.field = 'test';
  validator.value = 'morgan.wham2@morgan-lee.com';

  expect(() => validator.test()).toBeTruthy();
});

/**
 * Invalid Emails
 */
test('Totally invalid email', () => {
  const validator = new EmailValidator();
  validator.field = 'test';
  validator.value = 'not an email';
  
  expect(() => validator.test()).toThrow();
});

test('Email without tld', () => {
  const validator = new EmailValidator();
  validator.field = 'test';
  validator.value = 'name@gmail';
  
  expect(() => validator.test()).toThrow();
});

test('', () => {
  const validator = new EmailValidator();
  validator.field = 'test';
  validator.value = '';
  
  expect(() => validator.test()).toThrow();
});