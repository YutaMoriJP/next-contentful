import style from "./style.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={style.container}>
      <aside className={style.sidebar}></aside>
      <main className={style.main}>{children}</main>
    </div>
  );
};

export default Layout;
