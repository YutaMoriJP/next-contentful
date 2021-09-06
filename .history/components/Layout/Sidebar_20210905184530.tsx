import Link from "next/link";
interface NavOption {
  name: string;
  id: number;
  path: string;
}
interface SidebarProps {
  nav: NavOption[];
}

const Sidebar = ({ nav }: SidebarProps) => {
  console.log(nav);
  return (
    <>
      {nav.map(({ name, id, path }) => {
        return <a>{name}</a>;
      })}
    </>
  );
};

export default Sidebar;
