import closeMenuIcon from "../assets/images/icon-menu-close.svg";

interface Props {
  dialogElement: React.RefObject<HTMLDialogElement>;
}

function MobileMenu({ dialogElement }: Props) {
  function closeModal() {
    const dialog = dialogElement.current;
    if (dialog) dialog.close();
  }
  return (
    <dialog ref={dialogElement}>
      <img src={closeMenuIcon} onClick={closeModal} />
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">New</a>
          </li>
          <li>
            <a href="#">Popular</a>
          </li>
          <li>
            <a href="#">Trending</a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
        </ul>
      </nav>
    </dialog>
  );
}

export default MobileMenu;
