import React from 'react';
import SettingHeader from '../../../components/SettingsHeader/SettingsHeader';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import useStyles from './useStyles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

interface AvailibilityProps {
  header: string;
}
function createData(name: string, day: string, availableTime: { value: string; label: string }[]) {
  return { name, day, availableTime };
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
  createData('17 June, ', 'Monday', availableTime),
  createData('18 June, ', 'Tuesday', availableTime),
  createData('19 June, ', 'Wednesday', availableTime),
  createData('20 June, ', 'Thrusday', availableTime),
  createData('21 June, ', 'Friday', availableTime),
  createData('22 June, ', 'Saturday', availableTime),
  createData('23 June, ', 'Sunday', availableTime),
];

const Availability: React.FC<AvailibilityProps> = ({ header }) => {
  const classes = useStyles();

  const [startTime, setStartTime] = React.useState('10 am');
  const [endTime, setEndtTime] = React.useState('10 pm');

  const handleStartTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartTime(event.target.value);
  };
  const handleEndTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndtTime(event.target.value);
  };
  return (
    <>
      <SettingHeader header={header} />
      <Box>
        <Box className={classes.heading}>
          <DateRangeIcon className={classes.icon} sx={{ mr: 3 }} />
          <Typography variant="h5">17-23 june 2019</Typography>
        </Box>
        <TableContainer>
          <Table sx={{ maxWidth: 650, border: 1 }} aria-label="simple table">
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.name}
                    {row.day}
                  </TableCell>
                  <TableCell align="left">
                    From{' '}
                    <TextField
                      id="outlined-select-time"
                      select
                      value={startTime}
                      onChange={handleStartTimeChange}
                      fullWidth
                    >
                      {availableTime.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </TableCell>
                  <TableCell align="left">
                    To{' '}
                    <TextField
                      id="outlined-select-time"
                      select
                      value={endTime}
                      onChange={handleEndTimeChange}
                      fullWidth
                    >
                      {availableTime.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default Availability;
