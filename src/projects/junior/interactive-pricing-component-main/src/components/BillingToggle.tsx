function BillingToggle() {
  return (
    <div className="billing-toggle">
      <p>Monthly Billing</p>
      <label>
        <input type="radio" />
      </label>
      <p>
        Yearly Billing<span>25% discount</span>
      </p>
    </div>
  );
}

export default BillingToggle;
