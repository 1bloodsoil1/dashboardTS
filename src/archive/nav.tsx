import * as React from "react";
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
const Server = bundleIcon(Server20Filled, Server20Regular);
const Database = bundleIcon(Database20Filled, Database20Regular);
const Tasklist = bundleIcon(NotePin20Filled, NotePin20Regular);
const Geo = bundleIcon(Board20Filled, Board20Regular);

export const ModernNav = (props: Partial<NavDrawerProps>) => {
  const typeLableId = useId("type-label");
  const linkLabelId = useId("link-label");
  const multipleLabelId = useId("multiple-label");

  const styles = useStyles();
  const [isMultiple, setIsMultiple] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState(true);
  const [type, setType] = React.useState<DrawerType>("inline");
  const renderHamburgerWithToolTip = () => {
    return (
      <>
        <Hamburger onClick={() => setIsOpen(!isOpen)} />
      </>
    );
  };
  return (
    <div className={styles.root}>
      <NavDrawer
        defaultSelectedValue="1"
        type={type}
        open={isOpen}
        multiple={isMultiple}
      >
        <NavDrawerHeader>{renderHamburgerWithToolTip()}</NavDrawerHeader>
        <NavDrawerBody>
          <AppItem icon={<PersonCircle24Regular />} disabled={true}>
            SHAREPOINT ADMIN DASHBOARD
          </AppItem>
          <NavItem icon={<Dashboard />} value="1">
            Überblick
          </NavItem>
          <NavItem icon={<Database />} value="2">
            Datenbanken
          </NavItem>
          <NavItem icon={<Server />} value="3">
            Server
          </NavItem>
          <NavItem icon={<Tasklist />} value="4">
            Aufgabenliste
          </NavItem>
          <NavItem icon={<Geo />} value="5">
            Geo Redundanz
          </NavItem>
          <NavDivider />
          <NavItem value="99">Zurück</NavItem>
        </NavDrawerBody>
      </NavDrawer>
      <div className={styles.content}>
        {!isOpen && renderHamburgerWithToolTip()}
        <div className={styles.field}>
          <Text>Test</Text>
        </div>
      </div>
    </div>
  );
};
