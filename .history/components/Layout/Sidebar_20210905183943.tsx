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
      {nav.map(({ name, id, path }) => {
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
