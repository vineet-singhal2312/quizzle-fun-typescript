import "./Header.css";

export const Header = ({ heading }: { heading: string }) => {
  return (
    <div className="header">
      <h1 className="header-heading">{heading}</h1>
    </div>
  );
};
