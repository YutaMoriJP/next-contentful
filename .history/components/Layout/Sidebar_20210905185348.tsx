import Link from "next/link";
import style from "./style.module.css";
import { useRouter, NextRouter } from "next/router";
interface NavOption {
  name: string;
  id: number;
  path: string;
}
interface SidebarProps {
  nav: NavOption[];
}

const Sidebar = ({ nav }: SidebarProps) => {
  const { pathname }: NextRouter = useRouter();
  return (
    <>
      {nav.map(({ name, id, path }) => {
        return (
          <Link href={path} key={id}>
            <p className={`${style.link} ${pathname === path ? "active" : ""}`}>
              <a>{name}</a>
            </p>
          </Link>
        );
      })}
    </>
  );
};

export default Sidebar;
