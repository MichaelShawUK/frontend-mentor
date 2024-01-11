import Header from "./Header";
import Nav from "./Nav";

function MobileNav() {
  return (
    <dialog className="mobile-nav" open>
      <Header mode="modal" />
      <Nav />
    </dialog>
  );
}

export default MobileNav;
