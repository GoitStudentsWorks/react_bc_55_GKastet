import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logInUserThunk } from 'redux/Thunks/AuthUserThunk';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Button, InputAdornment, Stack, TextField } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import HttpsIcon from '@mui/icons-material/Https';
import { ButtonsBox } from 'pages/LoginPage/LoginPageStyled';

export const LogInForm = () => {
  const dispatch = useDispatch();

  const handlerOnSubmit = values => {
    //evt.preventDefault();
    // console.log(values);
    const logInUserData = values;
    dispatch(logInUserThunk(logInUserData));
    // evt.currentTarget.reset();
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  });

  
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={values => handlerOnSubmit(values)}
      validationSchema={validationSchema}
    >
      {formik => (
        <Stack sx={{ margin: '75px auto' }}>
          <Form>
            <Stack spacing={4}>
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
                  formik.errors.password && 'Please enter your valid password'
                }
              />
              {/* </Box> */}
              <ButtonsBox style={{margin:'52px auto 0'}}>
                <Button variant="contained" type="submit" sx={{backgroundImage:'linear-gradient(120deg, rgba(255, 199, 39, 1), rgba(158, 64, 186, 1) 80%, rgba(112, 0, 256))'}}>
                  Log in
                </Button>

                <Link to="/register">
                  <Button variant="contained" type="submit" sx={{backgroundColor: 'rgba(252, 252, 252, 1)'}}>
                    Register
                  </Button>
                </Link>
              </ButtonsBox>
            </Stack>
          </Form>
        </Stack>
      )}
    </Formik>
  );
};
