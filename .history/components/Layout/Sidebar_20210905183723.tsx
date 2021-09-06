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
        return (
          <Link href={navOption.path}>
            <a>{navOption.name}</a>;
          </Link>
        );
      })}
    </>
  );
};

export default Sidebar;
