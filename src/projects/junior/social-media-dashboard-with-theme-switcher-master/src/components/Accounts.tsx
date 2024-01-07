import accounts from "../data/accounts";

import Account from "./Account";

function Accounts() {
  return (
    <article className="accounts">
      {accounts.map((account) => (
        <Account account={account} />
      ))}
    </article>
  );
}

export default Accounts;
