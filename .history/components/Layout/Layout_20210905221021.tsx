import style from "./style.module.css";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={style.container}>
      <aside className={style.sidebar}>
        <Sidebar
          nav={[
            { name: "HOME", id: 0, path: "/" },
            { name: "BLOG", id: 1, path: "/blog" },
          ]}
        />
      </aside>
      <main className={style.main}>
        <motion.main></motion.main>
      </main>
    </div>
  );
};

export default Layout;
