import Link from "next/link";
interface NavOption {
  name: string;
  path: string;
  id: number;
}
interface SidebarProps {
  nav: NavOption[];
}

export const getStaticProps = async () => {
  return {
    props: {
      nav: [
        { name: "HOME", id: 0 },
        { name: "BLOG", id: 1 },
      ],
    },
  };
};

const Sidebar = ({ nav }: SidebarProps) => {
  return (
    <>
      {nav.map(({ name, id, path }) => {
        return (
          <Link href={path} key={id}>
            <a>{name}</a>;
          </Link>
        );
      })}
    </>
  );
};

export default Sidebar;
