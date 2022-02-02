import { FetchOptions } from '../../interface/FetchOptions';

const demoLogin = async (path: string) => {
  const fetchOptions: FetchOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  };
  console.log(path);
  return await fetch(`/auth/demo/${path}`, fetchOptions)
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default demoLogin;
