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
  table: {
    width: '100%',
    border: '1px solid RGB(0, 0, 0, .25)',
    borderRadius: theme.shape.borderRadius,
  },
  tableRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid RGB(0, 0, 0, .25)',
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
    alignItems: 'center',
    justifyContent: 'space-between',
    border: 0,
  },
}));
export default useStyles;
