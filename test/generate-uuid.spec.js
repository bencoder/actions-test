const generateUuid = require('../src/generate-uuid');

it('generates a uuid', () => {
  const uuid = generateUuid();
  expect(uuid.length).toBe(36);
})