import IpValidator from "../../../Validators/Text/IpValidator";

// The IP addresses found in this test are randomly generated

test('Valid IP address', () => {
  const validator = new IpValidator();
  validator.field = 'test';
  validator.value = '75.191.94.132';
  
  expect(() => validator.test()).toBeTruthy();
});

test('Valid IP with http', () => {
  const validator = new IpValidator();
  validator.field = 'test';
  validator.value = 'http://75.191.94.132/';
  
  expect(() => validator.test()).toThrow();
});

test('Random text', () => {
  const validator = new IpValidator();
  validator.field = 'test';
  validator.value = 'not an ip';
  
  expect(() => validator.test()).toThrow();
});