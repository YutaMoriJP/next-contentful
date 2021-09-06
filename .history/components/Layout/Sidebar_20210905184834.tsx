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
  return (
    <>
      <nav>
        {nav.map(({ name, id, path }) => {
          return (
            <Link href={path} key={id}>
              {name}
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default Sidebar;
