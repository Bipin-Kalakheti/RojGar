import exp from "constants";
import { Plus, Briefcase, AreaChart } from "lucide-react";

type NavLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const links: Array<NavLink> = [
  {
    href: "/add-job",
    label: "Add Job",
    icon: <Plus />,
  },
  {
    href: "/jobs",
    label: "Jobs",
    icon: <Briefcase />,
  },
  {
    href: "/stats",
    label: "Stats",
    icon: <AreaChart />,
  },
];

export default links;
