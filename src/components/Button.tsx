import React, { ButtonHTMLAttributes, StyleHTMLAttributes } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';
import { Colors } from '../constants/colors';

interface ButtonI {
  label: string;
  style?: any
  textStyle?: any
}

interface IconButtonI extends ButtonI {
  icon: React.ReactNode,
}

export function IconButton({icon, label}: IconButtonI) {
  return (
    <Stack direction="row" spacing={2}>
    <Button variant="outlined" style={{ textTransform: 'capitalize', color: Colors.text200, borderColor: 'lightgrey', borderRadius: '10px' }} startIcon={icon}>
      {label}
    </Button>
  </Stack>
  )
}

export function TextButton({label, style, textStyle}: ButtonI) {
  return (
    <Stack direction="row" spacing={2}>
    <Button variant="outlined" style={{ textTransform: 'none', color: Colors.text200, borderColor: 'lightgrey', borderRadius: '10px', ...style }}>
      <span style={{ ...textStyle }}>{label}</span>
    </Button>
  </Stack>
  )
}

