import React from "react";
import "./style.css";

type Props = {
  children?: JSX.Element;
  showSidebar: Boolean;
  isTabletOrMobile: Boolean;
};

function Content({ children, showSidebar, isTabletOrMobile }: Props) {
  return (
    <div
      className={`d_content ${
        showSidebar && !isTabletOrMobile ? "" : "showSidebar"
      }`}
      style={{
        zIndex: -1,
      }}
    >
      {children}
    </div>
  );
}

export default Content;
