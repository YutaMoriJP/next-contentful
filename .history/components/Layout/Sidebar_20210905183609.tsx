interface NavOption {
  name: string;
  path: string;
  id: number;
}
interface SidebarProps {
  nav: NavOption[];
}
const Sidebar = ({ nav }: SidebarProps) => {
  return <></>;
};

export default Sidebar;
