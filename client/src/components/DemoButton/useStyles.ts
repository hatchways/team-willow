import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const useStyles = makeStyles((theme: Theme) => ({
  demoButton: {
    margin: theme.spacing(3, 2, 2),
    padding: 10,
    width: 160,
    height: 56,
    borderRadius: theme.shape.borderRadius,
    fontSize: 16,
    backgroundColor: theme.palette.primary.main,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    left: 95,
    top: 15,
  },
}));

export default useStyles;
