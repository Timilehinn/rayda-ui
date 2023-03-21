import Box from '@mui/material/Box';
import styles from './styles.module.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

function BadgeIcon({ count }:{ count: number }){
  return (
    <span style={{ display: 'flex', alignItems: 'flex-end' }}>
      <NotificationsNoneIcon color="disabled" fontSize='large' />
      <div className={styles.icon_badge}>
        <p>{count}</p>
      </div>
    </span>
  )
}

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
     <div className={styles.nav}>
        <div style={{ }}>
          <p className={styles.text1}>Welcome</p>
          <p className={styles.text2}>Your current sales auction and activity.</p>
        </div>
        <BadgeIcon count={2} />
     </div>
    </Box>
  );
}