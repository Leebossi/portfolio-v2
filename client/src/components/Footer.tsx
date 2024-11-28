import macOS from "../assets/gif/macos.gif";

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <div className="footer">
      <img src={macOS} />
      <span>© Leevi Ossi {year}</span>
    </div>
  );
};
