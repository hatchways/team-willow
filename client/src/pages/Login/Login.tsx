import { FormikHelpers } from 'formik';
import login from '../../helpers/APICalls/login';
import LoginForm from './LoginForm/LoginForm';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';
import PageContainer from '../../components/PageContainer/PageContainer';
import AuthPageWrapper from '../../components/AuthPageWrapper/AuthPageWrapper';
import AuthPageFooter from '../../components/AuthPageFooter/AuthPageFooter';
import Button from '@mui/material/Button';
import { FetchOptions } from '../../interface/FetchOptions';
import useStyles from './useStyles';

function DemoLogin(): JSX.Element {
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();
  const classes = useStyles();

  const handleSubmit = async () => {
    const fetchOptions: FetchOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'omit',
    };
    return await fetch(`/auth/demo`, fetchOptions)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          updateSnackBarMessage(data.error.message);
        } else if (data.success) {
          updateSnackBarMessage(data.success);
          updateLoginContext(data.success);
        } else {
          updateSnackBarMessage('unexpected error occurred!');
        }
      })
      .catch(() => ({
        error: { message: 'Unable to connect to server. Please try again' },
      }));
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
        Demo Login
      </Button>
    </form>
  );
}

export default function Login(): JSX.Element {
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();

  const handleSubmit = (
    { email, password }: { email: string; password: string },
    { setSubmitting }: FormikHelpers<{ email: string; password: string }>,
  ) => {
    login(email, password).then((data) => {
      if (data.error) {
        setSubmitting(false);
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        updateLoginContext(data.success);
      } else {
        // should not get here from backend but this catch is for an unknown issue
        setSubmitting(false);
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
  };

  return (
    <PageContainer>
      <AuthPageWrapper header="Log in">
        <LoginForm handleSubmit={handleSubmit} />
        <DemoLogin />
        <AuthPageFooter text="Not a member?" anchorText="Sign up" anchorTo="/signup" />
      </AuthPageWrapper>
    </PageContainer>
  );
}
