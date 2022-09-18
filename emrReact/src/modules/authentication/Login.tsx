import React from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import BoxedLayout from "@core/components/BoxedLayout";
import { useSnackbar } from "@core/contexts/SnackbarProvider";
import LoadingButton from '@mui/lab/LoadingButton';
import { useAuth } from '@core/contexts/AuthProvider';
import { ROUTE_PATHS } from '@core/constants/routeConfig';
import bgImage from 'assets/images/bg.png';
export const Login = () => {
  const { isLoggingIn, login } = useAuth();

  const navigate = useNavigate();
  const snackbar = useSnackbar();
  const { t } = useTranslation();
  const handleLogin = async (email: string, password: string) => {
    //login 
    await login(email, password);
    snackbar.success(t('common.loginSuccess'))
    navigate(ROUTE_PATHS.PatientDashboard)
  };

  const formik = useFormik({
    initialValues: {
      username: "kietadmin",
      password: "200968",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required(t("common.validations.required")),
      password: Yup.string()
        .min(1, t("common.validations.min", { size: 1 }))
        .required(t("common.validations.required")),
    }),
    onSubmit: (values) => handleLogin(values.username, values.password),
  });

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item xs={false} sm={4} md={7}
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          bgcolor: "background.default",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} square>
        <BoxedLayout>
          <Typography component="h1" variant="h5">
            {t("auth.login.title")}
          </Typography>
          <Box
            component="form"
            marginTop={3}
            noValidate
            onSubmit={formik.handleSubmit}
          >
            <TextField
              margin="normal"
              variant="filled"
              required
              fullWidth
              id="username"
              label={t("auth.login.username")}
              name="username"
              autoFocus
              disabled={isLoggingIn}
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
            <TextField
              margin="normal"
              variant="filled"
              required
              fullWidth
              name="password"
              label={t("auth.login.password")}
              type="password"
              id="password"
              autoComplete="current-password"
              disabled={isLoggingIn}
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Box sx={{ textAlign: "right" }}>
              <Link
                component={RouterLink}
                to={`/forgot-password`}
                variant="body2"
              >
                {t("auth.login.forgotPassword")}
              </Link>
            </Box>
            <LoadingButton
              type="submit"
              fullWidth
              loading={isLoggingIn}
              variant="contained"
              sx={{ mt: 3 }}
            >
              {t("auth.login.submit")}
            </LoadingButton>
            <Box sx={{ textAlign: "center", marginTop:'10px' }}>
              <Link
                component={RouterLink}
                to={`/register`}
                variant="body2"
              >
                {t("auth.login.newAccount")}
              </Link>
            </Box>

          </Box>
        </BoxedLayout>
      </Grid>
    </Grid>
  );
};


