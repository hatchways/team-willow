import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  heading: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    color: theme.palette.primary.main,
  },
}));
export default useStyles;
