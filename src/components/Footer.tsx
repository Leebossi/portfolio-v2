import macOS from "../assets/gif/macos.gif";
import { GitHub } from "./GitHub";

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <div className="footer">
      <div>
        <img src={macOS} />
        <GitHub />
      </div>
      <span>© Leevi Ossi {year}</span>
    </div>
  );
};
