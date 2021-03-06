import React from "react";

import { Avatar, Box, Button, Checkbox, CssBaseline, FormControlLabel, Grid, Link, Paper, TextField, Typography } from "@mui/material";
import { PersonPinCircleOutlined } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Copyright = (props) => {
    return (
        <Typography variant="body2" color={'text.secondary'} align="center" {...props}>
            {'Copyright © '}
            <Link color={'inherit'} href="#">Lx ;p MUI </Link>
            {new Date().getFullYear()}
        </Typography>
    )
}

const SignIn = (props) => {
  props.onAuth(true);

  const theme = createTheme();

  const [formData, setFormData] = React.useState({
    email: '',
    password:'',
  });

  const [formError, setFormError] = React.useState({
    email: false,
    password: false,
  });

  const signInHandler = (e) => {
    e.preventDefault();
    // console.log('signin clicked');
    props.onAuth(true);
    localStorage.setItem('isSignedIn', '1');
  };

  const validateData = e => {
    // console.log("check email: ", e.target.value)
    switch (e.target.name) {
      case "email":
        setFormError(prev => ({...prev, [e.target.name]: !e.target.value.match(/\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+/gi)}));
        break;
      case "password":
        setFormError(prev => ({...prev, [e.target.name]: !e.target.value.match(/[\w!@#$\]><"\',./[%}^{&)*\\|:;.\-+=(]{8,16}/g)})); 
        break;
    }
    setFormData(prev => ({...prev, [e.target.name]: e.target.value}));
    // console.log("Data", formData, "Error", formError);
  }
  return (
    <ThemeProvider theme={theme}>
      <Grid container component={"main"} sx={{ height: "100vh" }}>
        <CssBaseline />
        {/* Image */}
        <Grid item xs={false} sm={4} md={8} 
        sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
            <Box sx={{
                my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center',
            }}>
                <Avatar sx={{m: 1, bgcolor: 'secondary.main' }}>
                    <PersonPinCircleOutlined />
                </Avatar>
                <Typography component={'h1'} variant='h3'>
                    Sign IN
                </Typography>
                <Box component={'form'} onSubmit={signInHandler} sx={{mx:1}}>
                    <TextField error={formError.email} margin="normal" autoComplete='off' onKeyUp={validateData} required fullWidth autoFocus id="email" label="Email Address" name="email" />
                    <TextField error={formError.password} margin="normal" onKeyUp={validateData} required fullWidth id="password" label='Password' type={'password'} name="password" autoComplete="current-password" />
                    <FormControlLabel label="Remember me" control={<Checkbox value={'remember'} color='primary' /> } />
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2}} >Sign IN</Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">Forgot Password</Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2"> {"Don't have an account? Sign UP"} </Link>
                        </Grid>
                    </Grid>
                    <Copyright sx={{ mt: 5 }} />
                </Box>
            </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default SignIn;
