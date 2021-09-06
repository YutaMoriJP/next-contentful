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
  console.log("nav", nav);
  return (
    <>
      {nav.map(navOption => {
        return (
          <Link href={navOption.path} key={navOption.id}>
            <a>{navOption.name}</a>;
          </Link>
        );
      })}
    </>
  );
};

export default Sidebar;
