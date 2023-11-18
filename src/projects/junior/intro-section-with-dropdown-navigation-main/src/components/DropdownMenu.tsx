import { Ilink } from "../App";
import UpSvg from "./upSvg";
import DownSvg from "./downSvg";

import { useState, useEffect, useRef, useCallback } from "react";

interface Props {
  category: string;
  links: Ilink[];
}

function DropdownMenu({ category, links }: Props) {
  const [showMenu, setShowMenu] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  function clickHandler(event: UIEvent) {
    if (showMenu) {
      setShowMenu(false);
    }
    if (event.target === buttonRef.current && !showMenu) {
      setShowMenu(true);
    }
    if (event.target === arrowRef.current && !showMenu) {
      setShowMenu(true);
    }
  }
  const cacheClickHandler = useCallback(clickHandler, [showMenu]);

  useEffect(() => {
    window.addEventListener("click", cacheClickHandler);

    return () => {
      window.removeEventListener("click", cacheClickHandler);
    };
  }, [showMenu, cacheClickHandler]);

  const className = showMenu ? "show dropdown" : "dropdown";

  return (
    <div className={className}>
      <div className="btn-wrapper">
        <button ref={buttonRef}>{category}</button>
        {showMenu ? <UpSvg ref={arrowRef} /> : <DownSvg ref={arrowRef} />}
      </div>
      <div className="links">
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href}>
                {link.icon && <img src={link.icon} />}
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DropdownMenu;
