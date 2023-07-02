import clsx from "clsx";
import useIsDesktop from "../../../utils/hooks/useIsDesktop";
import "./footer.css";
import React from "react";

type FooterProps = React.HTMLAttributes<HTMLDivElement>;

const CC_LOGO = {
  desktop: "https://licensebuttons.net/l/by/4.0/88x31.png",
  mobile: "https://licensebuttons.net/l/by/4.0/80x15.png",
};
const Footer = ({ className, ...rest }: FooterProps) => {
  const isDesktop = useIsDesktop();
  const textCls = clsx(isDesktop ? "subtitle" : "small"); // careful with color overrides from class as well

  return (
    <div className={clsx(className, "footer")} {...rest}>
      <a
        rel="license noopener noreferrer"
        href="http://creativecommons.org/licenses/by/4.0/"
        target="_blank"
      >
        <img
          className="cc"
          src={CC_LOGO[isDesktop ? "desktop" : "mobile"]}
          alt="Creative Commons License"
        />
      </a>

      <span className={textCls}>
        Designed with{" "}
        <a
          href="https://spline.design/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Spline
        </a>{" "}
        and{" "}
        <a href="https://figma.com/" target="_blank" rel="noopener noreferrer">
          Figma
        </a>
      </span>
    </div>
  );
};

export default Footer;
