import todoIcon from "../assets/images/icon-todo.svg";
import calendarIcon from "../assets/images/icon-calendar.svg";
import reminderIcon from "../assets/images/icon-reminders.svg";
import planningIcon from "../assets/images/icon-planning.svg";

function DropdownMenu() {
  return (
    <div className="dropdown">
      <button>Features</button>
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
