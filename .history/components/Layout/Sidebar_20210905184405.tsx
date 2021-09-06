import Link from "next/link";
interface NavOption {
  name: string;
  id: number;
}
interface SidebarProps {
  nav: NavOption[];
}

const Sidebar = ({ nav }: SidebarProps) => {
  return (
    <>
      {nav.map(({ name, id }) => {
        return <a>{name}</a>;
      })}
    </>
  );
};

export default Sidebar;
