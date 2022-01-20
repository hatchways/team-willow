import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  icon: {
    margin: '0 15px',
    color: theme.palette.primary.main,
  },
  table: {
    width: '100%',
    border: '1px solid RGB(0, 0, 0, .25)',
    borderRadius: theme.shape.borderRadius,
  },
  tableRow: {
    borderBottom: '1px solid RGB(0, 0, 0, .25)',
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
}));
export default useStyles;
