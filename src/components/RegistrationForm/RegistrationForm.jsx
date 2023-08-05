import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUserThunk } from 'redux/Thunks/AuthUserThunk';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, InputAdornment, Stack, TextField } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handlerOnSubmit = values => {
    //evt.preventDefault();

    const registerUserData = {
      username: values.username,
      email: values.email,
      password: values.password,
    };

    dispatch(registerUserThunk(registerUserData));
    //evt.currentTarget.reset();
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(6).max(12).required('Required'),
  });

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={values => handlerOnSubmit(values)}
      validationSchema={validationSchema}
    >
      {formik => (
        <Stack sx={{ margin: '75px auto', width: '400px' }}>
          <Form onSubmit={formik.handleSubmit}>
            <Stack spacing={4}>
              {/* <Box
                sx={{ display: 'flex', alignItems: 'flex-end', width: '100%' }}
              >
                <PersonIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} /> */}
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
                style={{ width: '100%' }}
                variant="standard"
                label="Name"
                name="username"
                type="text"
                onChange={formik.handleChange}
                error={Boolean(formik.errors.username)}
                helperText={formik.errors.username && 'Please enter your name'}
              />
              {/* </Box> */}
              {/* <Box
                sx={{ display: 'flex', alignItems: 'flex-end', width: '100%' }}
              >
                <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} /> */}
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
                style={{ width: '100%' }}
                variant="standard"
                label="Email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                error={Boolean(formik.errors.email)}
                helperText={
                  formik.errors.email && 'Please enter a valid email address'
                }
              />
              {/* </Box> */}
              {/* <Box
                sx={{ display: 'flex', alignItems: 'flex-end', width: '100%' }}
              >
                <HttpsIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} /> */}
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <HttpsIcon />
                    </InputAdornment>
                  ),
                }}
                style={{ width: '100%' }}
                variant="standard"
                label="Password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                error={Boolean(formik.errors.password)}
                helperText={
                  formik.errors.password &&
                  'Please enter your valid password (from 6 to 12 symbols)'
                }
              />
              {/* </Box> */}
              {/* <Box
                sx={{ display: 'flex', alignItems: 'flex-end', width: '100%' }}
              >
                <HttpsIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} /> */}
              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <HttpsIcon />
                    </InputAdornment>
                  ),
                }}
                style={{ width: '100%' }}
                variant="standard"
                label="Confirm password"
                name="confirmPassword"
                type="password"
                onChange={formik.handleChange}
                error={Boolean(formik.errors.confirmPassword)}
                helperText={
                  formik.errors.confirmPassword &&
                  'Please enter your valid password'
                }
              />
              {/* </Box> */}
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mt={4}
              >
                <Button
                  variant="contained"
                  type="submit"
                  size="large"
                  //disabled={!formik.isValid}
                >
                  Register
                </Button>
                <Link to="/login">
                  <Button
                    variant="contained"
                    type="submit"
                    size="large"
                    //disabled={!formik.isValid}
                  >
                    Log in
                  </Button>
                </Link>
              </Stack>
            </Stack>
          </Form>
        </Stack>
      )}
    </Formik>
  );
};
