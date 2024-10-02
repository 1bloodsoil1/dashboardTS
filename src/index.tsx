import * as React from "react";
import { render } from "react-dom";
import {
  FluentProvider,
  webLightTheme,
  webDarkTheme,
  Button,
} from "@fluentui/react-components";
import "office-ui-fabric-react/dist/css/fabric.css";
import "/src/custom.css";
import { Icon } from "@fluentui/react/lib/Icon";
import { TextMain, TextFooter } from "/src/Text.tsx";
import { ModenNavigationFUI2 } from "/src/archive/navigationModern.tsx";
import { Content } from "/src/Content.tsx";

const AdminIcon = () => <Icon iconName="BugSolid" />;

const App: React.FunctionComponent = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <div className="ms-Grid">
        <div className="ms-Grid-row">
          <div className="ms-lg12">
            <SiteHeader />
          </div>
        </div>
        <div className="ms-Grid-row">
          <div className="ms-lg12">
            {/* <NavBasicExample /> */}
            {/* <ModernNav /> */}
            <ModenNavigationFUI2 />
          </div>
        </div>
      </div>
      <SiteFooter />
    </FluentProvider>
  );
};

const SiteHeader = () => (
  <div className="site-Header">
    <AdminIcon /> SHAREPOINT ADMIN DASHBOARD
  </div>
);

const SiteFooter = () => (
  <div className="site-Footer">
    <AdminIcon /> Footer
  </div>
);

const rootElement = document.getElementById("root");
render(<App />, rootElement);
