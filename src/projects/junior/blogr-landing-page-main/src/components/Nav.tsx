function categoryHandler(event: React.MouseEvent) {
  console.log((event.target as HTMLParagraphElement).parentElement);
  const parent = (event.target as HTMLParagraphElement).parentElement;
  parent?.classList.toggle("selected");
}

function Nav() {
  return (
    <nav>
      <ul>
        <li>
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
        <li>
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
        <li>
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
