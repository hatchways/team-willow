import React, { useState } from 'react';
import SettingHeader from '../../../components/SettingsHeader/SettingsHeader';
import { Box } from '@mui/system';
import { Container, ListItemText, Typography } from '@mui/material';
import useStyles from './useStyles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface AvailibilityProps {
  header: string;
}
function createData(date: string, value: number, availableTime: { value: string; label: string }[]) {
  return { date, availableTime };
}
const availableTime = [
  {
    value: '10 am',
    label: '10 am',
  },
  {
    value: '11 am',
    label: '11 am',
  },
  {
    value: '12 pm',
    label: '12 pm',
  },
  {
    value: '1 pm',
    label: '1 pm',
  },
  {
    value: '2 pm',
    label: '2 pm',
  },
  {
    value: '3 pm',
    label: '3 pm',
  },
  {
    value: '4 pm',
    label: '4 pm',
  },
  {
    value: '5 pm',
    label: '5 pm',
  },
  {
    value: '6 pm',
    label: '6 pm',
  },
  {
    value: '7 pm',
    label: '7 pm',
  },
  {
    value: '8 pm',
    label: '8 pm',
  },
  {
    value: '9 pm',
    label: '9 pm',
  },
  {
    value: '10 pm',
    label: '10 pm',
  },
];
const rows = [
  createData('SUN', 0, availableTime),
  createData('MON', 1, availableTime),
  createData('TUE', 2, availableTime),
  createData('WED', 3, availableTime),
  createData('THU', 4, availableTime),
  createData('FRI', 5, availableTime),
  createData('SAT', 6, availableTime),
];

const Availability: React.FC<AvailibilityProps> = ({ header }) => {
  const classes = useStyles();
  const [isChecked, setIsChecked] = useState(true);

  const handleToggle = () => {
    if (isChecked === true) {
      setIsChecked(false);
    } else {
      setIsChecked(true);
    }
  };

  const [startTime, setStartTime] = React.useState('10 am');
  const [endTime, setEndtTime] = React.useState('10 pm');

  const handleStartTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartTime(event.target.value);
  };
  const handleEndTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndtTime(event.target.value);
  };
  return (
    <Container>
      <SettingHeader header={header} />
      <Box>
        <TableContainer>
          <Table aria-label="simple table" className={classes.table}>
            <TableBody>
              <TableRow>
                <Typography variant="h5" sx={{ fontWeight: 700, m: 4 }}>
                  Set your weekly hours
                </Typography>
              </TableRow>
              {rows.map((row) => (
                <TableRow className={classes.tableRow} key={row.date}>
                  <TableCell sx={{ border: 0 }}>
                    <ListItemButton role={undefined} dense>
                      <ListItemIcon>
                        <Checkbox checked={isChecked} onClick={handleToggle} edge="start" tabIndex={-1} disableRipple />
                      </ListItemIcon>
                      <ListItemText primary={<Typography sx={{ fontWeight: 700 }}>{row.date}</Typography>} />
                    </ListItemButton>
                  </TableCell>
                  <TableCell sx={{ display: 'flex', border: 0, alignItems: 'center', justifyContent: 'space-between' }}>
                    {isChecked !== true ? (
                      <Typography>Unavailable</Typography>
                    ) : (
                      <Box sx={{ display: 'flex', border: 0, alignItems: 'center', justifyContent: 'center' }}>
                        <TextField
                          id="outlined-select-time"
                          select
                          value={startTime}
                          onChange={handleStartTimeChange}
                          fullWidth
                        >
                          {availableTime.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              <Typography className={classes.txt}>{option.label}</Typography>
                            </MenuItem>
                          ))}
                        </TextField>
                        <Typography sx={{ mx: 3 }}>-</Typography>

                        <TextField
                          id="outlined-select-time"
                          select
                          value={endTime}
                          onChange={handleEndTimeChange}
                          fullWidth
                        >
                          {availableTime.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              <Typography className={classes.txt}>{option.label}</Typography>
                            </MenuItem>
                          ))}
                        </TextField>
                        <DeleteIcon className={classes.icon} />
                      </Box>
                    )}
                    <Box>
                      <AddIcon />
                      <ContentCopyIcon />
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default Availability;
