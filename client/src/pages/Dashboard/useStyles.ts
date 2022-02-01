import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => ({
  searchContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '80px',
  },
  datePicker: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid rgb(0,0,0,0.25)',
    borderRadius: theme.shape.borderRadius,
    padding: '0 25px',
  },
  searchIcon: {
    color: theme.palette.primary.main,
  },
  icon: {
    opacity: 0.5,
    margin: '0 25px',
  },
}));

export default useStyles;
