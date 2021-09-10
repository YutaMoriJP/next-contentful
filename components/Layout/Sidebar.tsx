import Link from "next/link";
import style from "./style.module.css";
import { useRouter, NextRouter } from "next/router";
interface NavOption {
  name: string;
  id: number;
  path: string;
  Icon: React.ReactNode;
}
interface SidebarProps {
  nav: NavOption[];
}

const Sidebar = ({ nav }: SidebarProps) => {
  const { pathname }: NextRouter = useRouter();
  return (
    <>
      {nav.map(({ name, id, path, Icon }) => {
        return (
          <Link href={path} key={id}>
            <article
              className={`${style.nav} ${
                pathname === path ? style.active : ""
              }`}
            >
              {Icon}
              <p
                className={`${style.link} ${
                  pathname === path ? style.active : ""
                }`}
              >
                <a>{name}</a>
              </p>
            </article>
          </Link>
        );
      })}
    </>
  );
};

export default Sidebar;
