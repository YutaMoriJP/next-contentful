import Link from "next/link";
import style from "./style.module.css";

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
      {nav.map(({ name, id, path }) => {
        return (
          <Link href={path} key={id} className={style.link}>
            <p>
              <a>{name}</a>
            </p>
          </Link>
        );
      })}
    </>
  );
};

export default Sidebar;
