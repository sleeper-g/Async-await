import read from './reader';
import json from './parser';

class GameSaving {
  constructor(id, created, userInfo){
    this.id = id;
    this.created = created;
    this.userInfo = userInfo;
  }
};

export default class GameSavingLoader {
  static load() {
    const result = async () => {
      try {
        const response = await read();
        const data = await json(response);
        const obj = JSON.parse(data);
        const { id, created, userInfo } = obj;
        return new GameSaving(id, created, userInfo);
      } catch (err) {
        console.log(err);
      }
    };
    return result();
  }
}
