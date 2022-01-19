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

  dateTxt: {
    fontSize: 16,
    fontWeight: 700,
  },
  dayTxt: {
    fontSize: 16,
    fontWeight: 700,
    color: 'RGB(0, 0, 0, .44)',
  },
  txt: {
    fontSize: 16,
    fontWeight: 700,
    margin: '0 30px',
  },
  cellAlignment: {
    displaly: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));
export default useStyles;
