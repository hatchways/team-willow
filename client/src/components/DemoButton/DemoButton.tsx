import Button from '@mui/material/Button';
import useStyles from './useStyles';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';
import demoLogin from '../../helpers/APICalls/demoLogin';

interface Props {
  text: string;
  path: string;
}

function DemoLogin({ text, path }: Props): JSX.Element {
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();
  const classes = useStyles();

  const handleSubmit = async () => {
    const data = await demoLogin(path);
    if (data.error) {
      updateSnackBarMessage(data.error.message);
    } else if (data.success) {
      updateSnackBarMessage(data.success);
      updateLoginContext(data.success);
    } else {
      updateSnackBarMessage('unexpected error occurred!');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Button
        className={classes.demoButton}
        type="submit"
        size="large"
        variant="contained"
        color="primary"
        disableElevation
      >
        {text}
      </Button>
    </form>
  );
}

export default DemoLogin;
