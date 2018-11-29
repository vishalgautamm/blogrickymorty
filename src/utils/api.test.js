
import getCharacters from './api.js'


test('The response is Rick information', async () => {
  expect.assertions(1);
  const response = await getCharacters(1);
  expect(response.data.name).toBe('Rick');
});

