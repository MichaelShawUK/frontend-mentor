function BillingToggle() {
  return (
    <div className="billing-toggle">
      <p className="monthly">Monthly Billing</p>
      <label>
        <input type="checkbox" />
      </label>
      <p className="yearly">
        Yearly Billing<span>25% discount</span>
      </p>
    </div>
  );
}

export default BillingToggle;
