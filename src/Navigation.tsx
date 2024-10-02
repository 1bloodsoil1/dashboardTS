import * as React from "react";
import { initializeIcons } from "@fluentui/react";
import "office-ui-fabric-react/dist/css/fabric.css";
import { Content } from "/src/Content.tsx";
import {
  Dropdown,
  DropdownMenuItemType,
  IDropdownStyles,
  IDropdownOption,
} from "@fluentui/react/lib/Dropdown";
import {
  Nav,
  INavLink,
  INavStyles,
  INavLinkGroup,
  INavProps,
} from "@fluentui/react/lib/Nav";
import { Select, useId, SelectProps, Label } from "@fluentui/react-components";
import "/src/custom.css";

initializeIcons();

const navStyles: Partial<INavStyles> = {
  root: {
    width: 180,
    height: "80vh",
    boxSizing: "border-box",
    // overflowY: "auto",
    // background:
    //   "url(https://picsum.photos/id/249/180/1000/?blur=10) center no-repeat",
  },
  navItems: {
    backgroundColor: "rgba(240,240,240,0.5)",
  },
  navItem: {
    fontWeight: "bold",
    fontColor: "white",
  },
};

interface NavigationProps {
  initialSelectedKey: string;
}

const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: "Übersicht",
        url: "#",
        icon: "Taskboard",
        key: "key1",
      },
      {
        name: "Datenbanken",
        url: "#",
        key: "key2",
        icon: "Database",
      },
      {
        name: "Server",
        url: "#",
        key: "key3",
        icon: "Server",
      },
      {
        name: "Geo Redundanz",
        url: "#",
        icon: "World",
        key: "key4",
      },
      {
        name: "Aufgabenliste",
        url: "#",
        icon: "TaskManager",
        key: "key5",
      },
      {
        name: "Zurück",
        url: "#",
        icon: "ReturnKey",
        key: "key6",
      },
    ],
  },
];

export const NavBasicExample: React.FunctionComponent = () => {
  const [activeKey, setActiveKey] = React.useState<string | undefined>(
    undefined
  );

  const onLinkClick = (ev?: React.MouseEvent<HTMLElement>, item?: any) => {
    setActiveKey(item?.key);
  };

  return (
    <div>
      <div class="ms-Grid ms-motion-fadeIn " dir="ltr">
        <div class="ms-Grid-row">
          <div class="ms-Grid-col ms-sm6 ms-md4 ms-lg2">
            <SelectEnvironment />
            <Nav
              onLinkClick={onLinkClick}
              selectedKey={activeKey}
              ariaLabel="Navigation Admin Dashboard"
              styles={navStyles}
              groups={navLinkGroups}
            />
          </div>
          <div class="ms-Grid-col ms-sm6 ms-md8 ms-lg10 darker-background">
            <Content activeKey={activeKey} />
          </div>
        </div>
      </div>
    </div>
  );
};

const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 180 },
};

const options: IDropdownOption[] = [
  { key: "ZVD-P1", text: "ZVD-P1" },
  { key: "ZVD-P2", text: "ZVD-P2" },
  { key: "ZVD-P3", text: "ZVD-P3" },
];

export const SelectEnvironment = () => (
  <>
    <Dropdown
      placeholder="Select an option"
      label="Umgebung"
      options={options}
      styles={dropdownStyles}
    />
  </>
);

function _onLinkClick(ev?: React.MouseEvent<HTMLElement>, item?: any) {
  setActiveKey(item?.key);
}
