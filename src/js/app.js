import GameSavingLoader from './GameSavingLoader';

async () => {
  try {
    const res = await GameSavingLoader.load();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
