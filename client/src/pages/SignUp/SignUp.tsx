import { FormikHelpers } from 'formik';
import register from '../../helpers/APICalls/register';
import SignUpForm from './SignUpForm/SignUpForm';
import { useAuth } from '../../context/useAuthContext';
import { useSnackBar } from '../../context/useSnackbarContext';
import AuthPageWrapper from '../../components/AuthPageWrapper/AuthPageWrapper';
import PageContainer from '../../components/PageContainer/PageContainer';
import AuthPageFooter from '../../components/AuthPageFooter/AuthPageFooter';
import Button from '@mui/material/Button';
import { FetchOptions } from '../../interface/FetchOptions';
import useStyles from './useStyles';
import Box from '@mui/material/Box';

function DemoSignUp(): JSX.Element {
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();
  const classes = useStyles();

  const handleSubmit = async () => {
    const fetchOptions: FetchOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    };
    return await fetch(`/auth/demo/signup`, fetchOptions)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          updateSnackBarMessage(data.error.message);
        } else if (data.success) {
          updateSnackBarMessage(data.success);
          updateLoginContext(data.success);
        } else {
          console.log({ data });
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
        Demo SignUp
      </Button>
    </form>
  );
}

export default function Register(): JSX.Element {
  const { updateLoginContext } = useAuth();
  const { updateSnackBarMessage } = useSnackBar();

  const handleSubmit = (
    { name, email, password }: { email: string; password: string; name: string },
    { setSubmitting }: FormikHelpers<{ email: string; password: string; name: string }>,
  ) => {
    register(name, email, password).then((data) => {
      if (data.error) {
        console.error({ error: data.error.message });
        setSubmitting(false);
        updateSnackBarMessage(data.error.message);
      } else if (data.success) {
        updateLoginContext(data.success);
      } else {
        // should not get here from backend but this catch is for an unknown issue
        console.error({ data });

        setSubmitting(false);
        updateSnackBarMessage('An unexpected error occurred. Please try again');
      }
    });
  };

  return (
    <PageContainer>
      <AuthPageWrapper header="Sign up">
        <SignUpForm handleSubmit={handleSubmit} />
        <DemoSignUp />
        <AuthPageFooter text="Already a member?" anchorText="Login" anchorTo="/login" />
      </AuthPageWrapper>
    </PageContainer>
  );
}
