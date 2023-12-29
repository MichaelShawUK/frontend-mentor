function BillingToggle({
  onToggle,
  isDiscounted,
}: {
  onToggle: () => void;
  isDiscounted: boolean;
}) {
  return (
    <div className="billing-toggle">
      <p className="monthly">Monthly Billing</p>
      <label>
        <input type="checkbox" onChange={onToggle} checked={isDiscounted} />
      </label>
      <p className="yearly">
        Yearly Billing<span className="desktop">25% discount</span>
        <span className="mobile">-25%</span>
      </p>
    </div>
  );
}

export default BillingToggle;
