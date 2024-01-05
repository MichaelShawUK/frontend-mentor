import accounts from "../data/accounts";

import Account from "./Account";

function Accounts() {
  return (
    <div className="accounts">
      {accounts.map((account) => (
        <Account account={account} />
      ))}
    </div>
  );
}

export default Accounts;
