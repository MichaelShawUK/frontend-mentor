import "./styles/css/index.css";
import DropdownMenu from "./components/DropdownMenu";
import todoIcon from "./assets/images/icon-todo.svg";
import calendarIcon from "./assets/images/icon-calendar.svg";
import reminderIcon from "./assets/images/icon-reminders.svg";
import planningIcon from "./assets/images/icon-planning.svg";

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
    <div className="dropdown-nav">
      <DropdownMenu category="Features" links={featuresLinks} />
      <DropdownMenu category="Company" links={companyLinks} />
      <p>Content</p>
      <p>More Content</p>
    </div>
  );
}

export default DropdownNav;
