import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Formik } from "formik";
import { loginSchema } from "../../utils/validationSchema";
import { getAdminCredentials } from "../../apis/apis";
import { decodeToken, isTokenActivated } from "../../utils/functions";
import { useNavigate } from "react-router-dom";
import { storeDataFromLocalStorage } from "../../utils/localStorage";
import { useDispatch } from "react-redux";
import { setLoggedUser } from "../../redux/actions";

const theme = createTheme();

const Login = () => {

    const [isLoading, setIsLoading] = React.useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmitForm = async(value) => {
        await handleLoginUser(value)
    };

    const handleLoginUser = async(value) => {
        setIsLoading(true)
        try {
            const response = await getAdminCredentials(value)
            if(response){
                setIsLoading(false)
                const { data } = response
                console.log('data :', data)
                storeDataFromLocalStorage('token', data?.token)
                dispatch(setLoggedUser({ token: data?.token, isLogged: isTokenActivated(data?.token), user: decodeToken(data?.token) }))
                navigate('/dashboard')  
            }
        } catch (error) {
            console.log('error', error)
            setIsLoading(false)
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Formik initialValues={{
                        email: '',
                        password: ''
                    }}
                    validationSchema={loginSchema}
                    onSubmit={handleSubmitForm}  
                    >
                        {props =>
                            <Box sx={{ mt: 1 }}>
                                <form onSubmit={props.handleSubmit} >
                                    <TextField
                                        margin="normal"
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        onChange={props.handleChange}
                                        value={props.values.email}
                                        autoComplete="email"
                                        autoFocus
                                    />
                                    <TextField
                                        margin="normal"
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        onChange={props.handleChange}
                                        value={props.values.password}
                                        id="password"
                                        autoComplete="current-password"
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        disabled={isLoading}
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}
                                    >
                                        {isLoading ? 'Please wait' : 'Sign In'}
                                    </Button>
                                </form>
                            </Box>
                        }
                    </Formik>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Login
