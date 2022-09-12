import './login.scss';
import authService from '@core/services/auth.service';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import logo from 'assets/images/logo-icon.png';
import { useNavigate } from 'react-router-dom'
const tailLayout = {
  wrapperCol: { span: 24 },
  style: { marginTop: '50px' },
};

export default function Login() {
  const navigate = useNavigate();
  const onFinish = async (values: any) => {
    //Login
    const payload = {
    }
    const response = await authService.getToken(payload)
    if (response) {
      //dosomething

      //GetProvider

      //Redirect to Main Page
    }
  };


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    navigate("/my-task");
  };
  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src={logo} className="mb-3" />
          <Typography component="h1" variant="h5">
            Đăng nhập vào hệ thống
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField margin="normal" required fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Đăng nhập
            </Button>

          </Box>
        </Box>
      </Container>
    </>
  );
}
