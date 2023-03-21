import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import styles from './styles.module.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Colors } from '../../constants/colors';
// import MenuIcon from '@mui/icons-material/Menu';

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