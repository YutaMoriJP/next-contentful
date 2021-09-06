import Link from "next/link";
interface NavOption {
  name: string;
  path: string;
  id: number;
}
interface SidebarProps {
  nav: NavOption[];
}
const Sidebar = ({ nav }: SidebarProps) => {
  return (
    <>
      {nav.map(navOption => {
        return <a>{navOption.name}</a>;
      })}
    </>
  );
};

export default Sidebar;
