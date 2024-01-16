import Person from './Person';

export default class Professor extends Person {
  private _roomId: string = '';

  constructor() {
    super({ role: 'professor' });
  }

  get roomId(): string {
    return this._roomId;
  }
}
