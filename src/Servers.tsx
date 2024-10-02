import * as React from "react";
import {
  makeStyles,
  Button,
  Caption1,
  Text,
  tokens,
  Subtitle1,
  Tooltip,
} from "@fluentui/react-components";
import { MoreHorizontal20Regular } from "@fluentui/react-icons";
import {
  Card,
  CardHeader,
  CardPreview,
  Divider,
  Badge,
  TooltipProps,
} from "@fluentui/react-components";

import { ServerMultipleFilled, ServerRegular } from "@fluentui/react-icons";

import { List, ListItem } from "@fluentui/react-list-preview";

const useStyles = makeStyles({
  main: {
    gap: "36px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  card: {
    width: "320px",
    maxWidth: "320",
    height: "fit-content",
    margin: "8px",
  },

  section: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  title: { margin: "0 0 12px" },

  horizontalCardImage: {
    width: "64px",
    height: "64px",
  },

  headerImage: {
    borderRadius: "4px",
    maxWidth: "44px",
    maxHeight: "44px",
    fontSize: "44px",
  },

  caption: {
    color: tokens.colorNeutralForeground3,
  },

  text: { margin: "0" },

  iconTitle: {
    fontSize: "32px",
    margin: "auto",
  },

  siteTitle: {
    alignItems: "center",
  },
});

const resolveAsset = (asset: string) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/";

  return `${ASSET_URL}${asset}`;
};

const Title = ({ children }: React.PropsWithChildren<{}>) => {
  const styles = useStyles();
  return (
    <Subtitle1 as="h4" block className={styles.title}>
      {children}
    </Subtitle1>
  );
};

const ServerList = [
  { name: "VWP64000", role: "WebFrontEnd1", status: true },
  { name: "VWP64001", role: "WebFrontEnd2", status: true },
  { name: "VWP64002", role: "Application1", status: true },
  { name: "VWP64003", role: "Application2", status: false },
  { name: "VWP64004", role: "Search1", status: false },
  { name: "VWP64005", role: "Search2", status: true },
];

export const Server = () => {
  const styles = useStyles();
  return (
    <div className={styles.main}>
      <Title className={styles.siteTitle}>
        <ServerMultipleFilled className={styles.iconTitle} /> Serverübersicht
      </Title>
      <section className={styles.section}>
        {ServerList.map((server, index) => {
          return (
            <Card className={styles.card} key={index}>
              <CardHeader
                image={<ServerRegular className={styles.headerImage} />}
                header={<Text weight="semibold">{server.name}</Text>}
                description={
                  <Caption1 className={styles.caption}>{server.role}</Caption1>
                }

                // action={
                //   <Button
                //     appearance="transparent"
                //     icon={<MoreHorizontal20Regular />}
                //     aria-label="More options"
                //   />
                // }
              />
              <Divider />
              <p className={styles.text}>
                <List>
                  <ListItem>IP: 10.10.10.1</ListItem>
                  <ListItem>Standort: Berlin</ListItem>
                  <ListItem>
                    Status:<Text> </Text>
                    {server.status ? (
                      <Badge appearance="filled" color="success">
                        OK
                      </Badge>
                    ) : (
                      <Tooltip
                        appearance="inverted"
                        content="Zertifikate"
                        relationship="label"
                      >
                        <Badge appearance="filled" color="danger">
                          Fehler
                        </Badge>
                      </Tooltip>
                    )}
                  </ListItem>
                </List>
              </p>
            </Card>
          );
        })}
      </section>
    </div>
  );
};
