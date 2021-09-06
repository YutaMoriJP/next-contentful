import style from "./style.module.css";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";
interface LayoutProps {
  children: React.ReactNode;
}
const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};
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
        <motion.main>{children}</motion.main>
      </main>
    </div>
  );
};

export default Layout;
