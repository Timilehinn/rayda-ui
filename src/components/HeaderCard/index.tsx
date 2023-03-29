import { useState } from 'react'
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import styles from "./styles.module.css";
import { IconButton } from "../Button";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

const Badge = ({ text, type }: { text: string; type: string }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <span className={styles.badge}>
        <span />
        <p>{text}</p>
      </span>
      <p className={styles.auction_type}>{type}</p>
    </div>
  );
};

export default function HeaderCard() {

  const [ days, setDays ] = useState(0)
  const [ hours, setHours ] = useState(0)
  const [ mins, setMins ] = useState(0)
  const [ seconds, setSeconds ] = useState(0)

const countdownDate = new Date("2023-04-08T00:00:00Z").getTime();

const countdownTimer = setInterval(function() {

  const now = new Date().getTime();

  const remainingTime = countdownDate - now;

  setDays(Math.floor(remainingTime / (1000 * 60 * 60 * 24)));
  setHours(Math.floor(remainingTime / (1000 * 60 * 60) % 24));
  setMins(Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)))
  setSeconds(Math.floor((remainingTime % (1000 * 60)) / 1000))

  if (remainingTime < 0) {
    clearInterval(countdownTimer);
  }
}, 1000);

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
              Starts in: {days} days : {hours} hours : {mins} minutes : {seconds}s
            </p>
            <Badge text="Not Live" type="Layers Auction" />
          </div>
          <IconButton label="Accept Invite" icon={<ThumbUpOffAltIcon />} />
        </div>
      </div>
    </Card>
  );
}
