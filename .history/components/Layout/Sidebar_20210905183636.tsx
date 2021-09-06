interface NavOption {
  name: string;
  path: string;
  id: number;
}
interface SidebarProps {
  nav: NavOption[];
}
const Sidebar = ({ nav }: SidebarProps) => {
  return (
    <>
      {nav.map(navOption => {
        return <p>{navOption.name}</p>;
      })}
    </>
  );
};

export default Sidebar;
