import DropdownMenu from "../components/DropdownMenu";
import todoIcon from "../assets/images/icon-todo.svg";
import calendarIcon from "../assets/images/icon-calendar.svg";
import reminderIcon from "../assets/images/icon-reminders.svg";
import planningIcon from "../assets/images/icon-planning.svg";

export interface Ilink {
  text: string;
  href: string;
  icon?: string;
}

const featuresLinks: Ilink[] = [
  {
    text: "Todo List",
    icon: todoIcon,
    href: "#",
  },
  {
    text: "Calendar",
    icon: calendarIcon,
    href: "#",
  },
  {
    text: "Reminders",
    icon: reminderIcon,
    href: "#",
  },
  {
    text: "Planning",
    icon: planningIcon,
    href: "#",
  },
];

const companyLinks: Ilink[] = [
  {
    text: "History",
    href: "#",
  },
  {
    text: "Our Team",
    href: "#",
  },
  {
    text: "Blog",
    href: "#",
  },
];

function DropdownNav() {
  return (
    <nav className="dropdown-nav">
      <div className="navigation">
        <DropdownMenu category="Features" links={featuresLinks} />
        <DropdownMenu category="Company" links={companyLinks} />
        <a href="#">Careers</a>
        <a href="#">About</a>
      </div>
      <div className="account-actions">
        <a href="#">Login</a>
        <a href="#" className="register-btn">
          Register
        </a>
      </div>
    </nav>
  );
}

export default DropdownNav;
