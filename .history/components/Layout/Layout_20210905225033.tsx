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
const Layout = ({ children }: LayoutProps): JSX.Element => {
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
      <motion.main
        variants={variants} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ type: "linear" }} // Set the transition to linear
        className={style.main}
      >
        {children}
      </motion.main>
    </div>
  );
};

export default Layout;
