import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import styles from "./styles.module.css";
import { IconButton } from "../Button";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

const Bull = () => {
  return (
    <Box
      component="span"
      style={{ color: "#F79009", height: "6px", width: "6px" }}
    />
  );
};

const Badge = ({ text, type }: { text: string; type: string }) => {
  return (
    <div
      style={{ display: "flex", alignItems: "center" }}
    >
      <span className={styles.badge}>
        <span />
        <p>{text}</p>
      </span>
      <p className={styles.auction_type}>{type}</p>
    </div>
  );
};

export default function HeaderCard() {
  return (
    <Card className={styles.card_container}>
      <CardMedia
        component="img"
        image="/card-bg.png"
        alt="background-img"
        className={styles.card_media}
      />
      <div className={styles.card_content}>
        <img className={styles.card_logo} src="/page-logo.png" />
        <div className={styles.card_content__col}>
          <div className={styles.card_content__col1}>
            <p className={styles.auction_time}>
              Starts in: 3 days : 2 hours : 24 minutes{" "}
            </p>
            <Badge text="Not Live" type="Layers Auction" />
          </div>
          <IconButton label="Accept Invite" icon={<ThumbUpOffAltIcon />} />
        </div>
      </div>
    </Card>
  );
}
