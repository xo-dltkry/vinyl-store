import { makeAutoObservable } from "mobx";

interface IUser {
  id: number;
  email: string;
  role: 'USER' | 'ADMIN';
}

export default class UserStore {
  private _isAuth = false;
  private _user: IUser | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setIsAuth(bool: boolean) {
    this._isAuth = bool;
  }

  setUser(user: IUser) {
    this._user = user;
  }

  get isAuth(): boolean {
    return this._isAuth;
  }

  get user(): IUser | null {
    return this._user;
  }
}
