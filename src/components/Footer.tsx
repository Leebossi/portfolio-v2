import macOS from "../assets/gif/macos.gif";

export const Footer = () => {
  const year = 2023;
  return (
    <div className="footer">
      <img src={macOS} />
      <span>© Leevi Ossi {year}</span>
    </div>
  );
};
