import google from "../assets/images/logo-google.png";
import ibm from "../assets/images/logo-ibm.png";
import microsoft from "../assets/images/logo-microsoft.png";
import hp from "../assets/images/logo-hp.png";
import vector from "../assets/images/logo-vector-graphics.png";

function Clients() {
  return (
    <section className="clients">
      <ul>
        <li>
          <img src={google} />
        </li>
        <li>
          <img src={ibm} />
        </li>
        <li>
          <img src={microsoft} />
        </li>
        <li>
          <img src={hp} />
        </li>
        <li>
          <img src={vector} />
        </li>
      </ul>
    </section>
  );
}

export default Clients;
