export interface NavbarProps {
  title: string;
  icon: string;
}

export const Navbar: React.FC<NavbarProps> = ({ title, icon }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon}></i> {title}
      </h1>
    </nav>
  );
};
