import { useState } from "react";

function Nav() {
  const [selected, setSelected] = useState<string | null>(null);

  function categoryHandler(event: React.MouseEvent) {
    const category = (event.target as HTMLParagraphElement).textContent;
    if (category === selected) setSelected(null);
    else setSelected(category);
  }

  console.log(selected);

  return (
    <nav>
      <ul>
        <li className={selected === "Product" ? "selected" : undefined}>
          <p onClick={categoryHandler}>Product</p>
          <ul>
            <li>
              <a href="#Overview">Overview</a>
            </li>
            <li>
              <a href="#Pricing">Pricing</a>
            </li>
            <li>
              <a href="#Marketplace">Marketplace</a>
            </li>
            <li>
              <a href="#Features">Features</a>
            </li>
            <li>
              <a href="#Integrations">Integrations</a>
            </li>
          </ul>
        </li>
        <li className={selected === "Company" ? "selected" : undefined}>
          <p onClick={categoryHandler}>Company</p>
          <ul>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Team">Team</a>
            </li>
            <li>
              <a href="#Blog">Blog</a>
            </li>
            <li>
              <a href="#Careers">Careers</a>
            </li>
          </ul>
        </li>
        <li className={selected === "Connect" ? "selected" : undefined}>
          <p onClick={categoryHandler}>Connect</p>
          <ul>
            <li>
              <a href="#Contact">Contact</a>
            </li>
            <li>
              <a href="#Newsletter">Newsletter</a>
            </li>
            <li>
              <a href="#LinkedIn">LinkedIn</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
