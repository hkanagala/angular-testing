export class BankAccount {
  private _balance = 0;

  constructor(public name: NameInfo) {}
  get balance() {
    return this._balance;
  }
}

interface NameInfo {
  first: string;
  last: string;
  mi?: string;
}
