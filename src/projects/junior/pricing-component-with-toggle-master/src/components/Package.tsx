import { PackageType } from "../data/packages";

type Props = Omit<PackageType, "price"> & { price: number; accent: boolean };

function Package({ name, price, storage, users, sendData, accent }: Props) {
  return (
    <li className={`package ${accent ? "accent" : ""}`}>
      <h4 className="name">{name}</h4>
      <p className="price">
        $<span>{price}</span>
      </p>
      <ul>
        <li>{storage} Storage</li>
        <li>{users} Users Allowed</li>
        <li>Send up to {sendData}</li>
      </ul>
      <button>LEARN MORE</button>
    </li>
  );
}

export default Package;
