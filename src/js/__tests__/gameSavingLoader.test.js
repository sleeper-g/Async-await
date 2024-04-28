import GameSavingLoader from './../GameSavingLoader';

test('load function', async () => {
  const res = await GameSavingLoader.load()
  const info = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      level: 10,
      name: 'Hitman',
      points: 2000,
    }
  }
  expect(res).toEqual(info);
});
