import { BankAccount } from './banking/bank-account';
describe('The Bank Account', () => {
  describe('What a new Account Looks Like', () => {
    let account: BankAccount;

    beforeEach(() => {
      account = new BankAccount({ first: 'Joe', last: 'Schmidt' });
    });
    it('has name information', () => {
      // expect(account.name.first).toBe('Joe');
      // expect(account.name.last).toBe('Schmidt');

      expect(account.name).toEqual({
        first: 'Joe',
        last: 'Schmidt',
        mi: undefined,
      });
    });
    it('has the default opening balance', () => {
      expect(account.balance).toEqual(0);
    });
  });

  describe.skip('Making Deposits', () => {});

  describe.skip('Making Withdrawals', () => {});
});
