import style from "./style.module.css";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={style.container}>
      <aside className={style.sidebar}>
        <Sidebar
          nav={[
            { name: "HOME", path: "/", id: 0 },
            { name: "BLOG", path: "/blog", id: 1 },
          ]}
        />
      </aside>
      <main className={style.main}>{children}</main>
    </div>
  );
};

export default Layout;
