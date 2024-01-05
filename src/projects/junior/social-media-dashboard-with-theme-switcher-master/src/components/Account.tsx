import { AccountType } from "../data/accounts";

function Account({ account }: { account: AccountType }) {
  const formatter = Intl.NumberFormat("en", { notation: "compact" });

  return (
    <div className={`account ${account.platform}`}>
      <div className="flex-wrapper">
        <img src={account.icon} className="icon" />
        <p className="username">{account.username}</p>
      </div>
      <p className="followers">
        <span>
          {account.followers > 9999
            ? formatter.format(account.followers)
            : account.followers}
        </span>
        {`${account.platform === "youtube" ? "SUBSCRIBERS" : "FOLLOWERS"}`}
      </p>
      <p
        className={`change ${
          account.dailyChange > 0 ? "increase" : "decrease"
        }`}
      >
        {Math.abs(account.dailyChange)} Today
      </p>
    </div>
  );
}

export default Account;
