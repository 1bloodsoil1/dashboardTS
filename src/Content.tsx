import * as React from "react";
import { Overview } from "/src/Overview.tsx";
import { LargeTitle } from "@fluentui/react-components";
import { Server } from "/src/Servers.tsx";

interface ContentProps {
  activeKey: string;
}

export const Content: React.FunctionComponent<ContentProps> = ({
  activeKey,
}) => {
  const renderContent = () => {
    switch (activeKey) {
      case "key1":
        return (
          <>
            <div className="ms-motion-fadeIn">
              <p>
                <LargeTitle>Übersicht</LargeTitle>
              </p>
              <Overview />
            </div>
          </>
        );
      case "key2":
        return (
          <>
            <div className="ms-motion-fadeIn">
              <p>Learn more About us here.</p>
            </div>
          </>
        );
      case "key3":
        return (
          <>
            <Server />
          </>
        );
      default:
        return null;
    }
  };

  return <div>{renderContent()}</div>;
};

// export const Content = () => {
//   return (
//     <>
//       <div>
//         <p>Welcome to the Home page!</p>
//       </div>
//     </>
//   );
// };
