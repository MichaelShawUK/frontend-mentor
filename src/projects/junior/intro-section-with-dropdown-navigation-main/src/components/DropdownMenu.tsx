import todoIcon from "../assets/images/icon-todo.svg";
import calendarIcon from "../assets/images/icon-calendar.svg";
import reminderIcon from "../assets/images/icon-reminders.svg";
import planningIcon from "../assets/images/icon-planning.svg";

import { useState, useEffect, useRef, useCallback } from "react";

function DropdownMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  function clickHandler(event: UIEvent) {
    if (showMenu) {
      setShowMenu(false);
    }
    if (event.target === buttonRef.current && !showMenu) {
      setShowMenu(true);
    }
  }
  const cacheClickHandler = useCallback(clickHandler, [showMenu]);

  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("click", cacheClickHandler);

    return () => {
      window.removeEventListener("click", cacheClickHandler);
    };
  }, [showMenu, cacheClickHandler]);

  const className = showMenu ? "show dropdown" : "dropdown";

  return (
    <div className={className}>
      <button ref={buttonRef}>Features</button>
      <div className="links">
        <ul>
          <li>
            <a href="#">
              <img src={todoIcon} />
              Todo List
            </a>
          </li>
          <li>
            <a href="#">
              <img src={calendarIcon} />
              Calendar
            </a>
          </li>
          <li>
            <a href="#">
              <img src={reminderIcon} />
              Reminders
            </a>
          </li>
          <li>
            <a href="#">
              <img src={planningIcon} />
              Planning
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DropdownMenu;
