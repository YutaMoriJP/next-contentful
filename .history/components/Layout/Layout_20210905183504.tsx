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
            { name: "HOME", path: "/" },
            { name: "BLOG", path: "/" },
          ]}
        />
      </aside>
      <main className={style.main}>{children}</main>
    </div>
  );
};

export default Layout;
