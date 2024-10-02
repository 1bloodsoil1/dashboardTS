import * as React from "react";
import { Content } from "/src/Content.tsx";
import {
  AppItem,
  Hamburger,
  NavDivider,
  NavDrawer,
  NavDrawerBody,
  NavDrawerHeader,
  NavDrawerProps,
  NavItem,
  NavItemValue,
  NavSectionHeader,
  NavSubItem,
  NavSubItemGroup,
  OnNavItemSelectData,
} from "@fluentui/react-nav-preview";
import {
  Tooltip,
  makeStyles,
  tokens,
  useId,
  DrawerProps,
  Text,
} from "@fluentui/react-components";
import {
  Board20Filled,
  Board20Regular,
  Database20Regular,
  Database20Filled,
  Server20Regular,
  ServerMultiple20Regular,
  ServerMultiple20Filled,
  Server20Filled,
  NotePin20Filled,
  NotePin20Regular,
  bundleIcon,
  PersonCircle32Regular,
  PersonCircle24Regular,
} from "@fluentui/react-icons";

const useStyles = makeStyles({
  root: {
    overflow: "hidden",
    display: "flex",
    height: "600px",
  },
  content: {
    flex: "1",
    padding: "16px",
    display: "grid",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  field: {
    display: "flex",
    marginTop: "4px",
    marginLeft: "8px",
    flexDirection: "column",
    gridRowGap: tokens.spacingVerticalS,
  },
});

type DrawerType = Required<DrawerProps>["type"];

const Dashboard = bundleIcon(Board20Filled, Board20Regular);
const Server = bundleIcon(ServerMultiple20Filled, ServerMultiple20Regular);
const Database = bundleIcon(Database20Filled, Database20Regular);
const Tasklist = bundleIcon(NotePin20Filled, NotePin20Regular);
const Geo = bundleIcon(Board20Filled, Board20Regular);

export const ModenNavigationFUI2 = (props: Partial<NavDrawerProps>) => {
  const typeLableId = useId("type-label");
  const linkLabelId = useId("link-label");
  const multipleLabelId = useId("multiple-label");

  const styles = useStyles();
  const [isMultiple, setIsMultiple] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState(true);
  const [type, setType] = React.useState<DrawerType>("inline");
  const [activeKey, setActiveKey] = React.useState<string | undefined>("key1");

  const onItemClick = (
    ev?: React.EventHandler<OnNavItemSelectData>,
    item?: any
  ) => {
    setActiveKey(item.value);
    // console.log(item?.value);
    console.log(item.value);
  };

  return (
    <div className={styles.root}>
      <NavDrawer
        defaultSelectedValue="key1"
        type={type}
        open={isOpen}
        multiple={isMultiple}
        selectedValue={activeKey}
        onNavItemSelect={onItemClick}
      >
        <NavDrawerHeader>
          <AppItem icon={<PersonCircle24Regular />} disabled={true}>
            SHAREPOINT ADMIN DASHBOARD
          </AppItem>
        </NavDrawerHeader>
        <NavDrawerBody>
          <NavItem icon={<Dashboard />} value="key1">
            Überblick
          </NavItem>
          <NavItem icon={<Database />} value="key2">
            Datenbanken
          </NavItem>
          <NavItem icon={<Server />} value="key3">
            Server
          </NavItem>
          <NavItem icon={<Tasklist />} value="key4">
            Aufgabenliste
          </NavItem>
          <NavItem icon={<Geo />} value="key5">
            Geo Redundanz
          </NavItem>
          <NavDivider />
          <NavItem value="key99">Zurück</NavItem>
        </NavDrawerBody>
      </NavDrawer>
      <div className={styles.content}>
        <Content activeKey={activeKey} />
      </div>
    </div>
  );
};
