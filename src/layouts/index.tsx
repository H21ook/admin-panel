import React, { useEffect, useState } from "react";
import Content from "./Content";
import SidebarDocked from "./SidebarDocked";
import TopbarDocked from "./TopbarDocked";
import { useMediaQuery } from "react-responsive";

type Props = {
  children?: JSX.Element;
};

function Layout({ children }: Props) {
  const [showSidebar, setShowSidebar] = useState(true);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  useEffect(() => {
    setShowSidebar(!isTabletOrMobile);
  }, [isTabletOrMobile]);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div>
      <TopbarDocked
        toggleSidebar={toggleSidebar}
        isTabletOrMobile={isTabletOrMobile}
      />
      <SidebarDocked showSidebar={showSidebar} />
      <Content showSidebar={showSidebar} isTabletOrMobile={isTabletOrMobile}>{children}</Content>
    </div>
  );
}

export default Layout;
