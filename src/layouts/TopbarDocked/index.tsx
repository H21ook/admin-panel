import React from "react";
import { Button } from "primereact/button";
import "./style.css";

type Props = {
  toggleSidebar: () => void;
  isTabletOrMobile: Boolean;
};

function TopbarDocked(props: Props) {
  return (
    <div className="d_topbar">
      <div className="left_contents">
        <a href="/" className="logo mr-2">
          <img
            alt="logo"
            src="https://www.primefaces.org/primereact/images/primereact-logo-dark.svg"
            height={41}
          />
        </a>
        {props.isTabletOrMobile ? (
          <Button
            icon="pi pi-bars"
            onClick={() => {
              props.toggleSidebar();
            }}
          />
        ) : null}
      </div>

      <Button label="Logout" icon="pi pi-power-off" />
    </div>
  );
}

export default TopbarDocked;
