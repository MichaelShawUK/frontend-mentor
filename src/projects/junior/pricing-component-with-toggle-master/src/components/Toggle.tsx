function Toggle({ onChange }: { onChange: () => void }) {
  return (
    <div className="toggle">
      <p>Annually</p>
      <input type="checkbox" id="toggle" onChange={onChange} />
      <label className="switch" htmlFor="toggle"></label>
      <p>Monthly</p>
    </div>
  );
}

export default Toggle;
