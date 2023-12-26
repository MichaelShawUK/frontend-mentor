import Nav from "./Nav";
import { useRef, useEffect, useCallback } from "react";
import logo from "../assets/images/logo.svg";
import closeIcon from "../assets/images/icon-close-menu.svg";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { closeMenu } from "../store/slices/mobileMenu";
import { useAppSelector } from "../hooks/useRedux";

function MobileMenu() {
  const menuRef = useRef<HTMLDialogElement>(null);

  const dispatch: AppDispatch = useDispatch();
  const close = useCallback(() => dispatch(closeMenu()), [dispatch]);

  const isMobMenuOpen = useAppSelector((state) => state.mobileMenu.isOpen);

  useEffect(() => {
    if (!isMobMenuOpen && menuRef.current) menuRef.current.close();
    if (isMobMenuOpen && menuRef.current) menuRef.current.showModal();
  }, [isMobMenuOpen]);

  useEffect(() => {
    const menu = menuRef.current;

    menu?.addEventListener("close", close);

    return () => {
      menu?.removeEventListener("close", close);
      close();
    };
  }, [close]);

  return (
    <dialog className="mobile-menu" ref={menuRef}>
      <div className="menu-header">
        <img src={logo} />
        <img src={closeIcon} className="icon" onClick={close} />
      </div>
      <Nav />
    </dialog>
  );
}

export default MobileMenu;
