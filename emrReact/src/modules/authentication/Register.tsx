import React from "react";
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
import LoadingButton from "@mui/lab/LoadingButton";
import { useAuth } from "@core/contexts/AuthProvider";
import { ROUTE_PATHS } from "@core/constants/routeConfig";
import bgImage from "assets/images/bg.png";
import FlexBox from "@core/components/FlexBox";
export const Register = () => {
  const navigate = useNavigate();
  const snackbar = useSnackbar();
  const { t } = useTranslation();
  const handleLogin = async () => {
    //login
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      yourEmail: "",
      phoneNumber: "",
      content: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required(t("common.validations.required")),
      lastName: Yup.string().required(t("common.validations.required")),
      phoneNumber: Yup.string().required(t("common.validations.required")),
      yourEmail: Yup.string().required(t("common.validations.required")),
      content: Yup.string().required(t("common.validations.required")),
    }),
    onSubmit: (values) => handleLogin(),
  });

  return (
    <Grid container component='main' sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
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
          <Typography component='h1' variant='h5'>
            {t("auth.register.title")}
          </Typography>
          <Box
            component='form'
            marginTop={3}
            noValidate
            onSubmit={formik.handleSubmit}
          >
            <FlexBox gap={"10px"}>
              <TextField
                margin='normal'
                variant='filled'
                required
                fullWidth
                id='firstName'
                label={t("auth.register.firstName")}
                name='firstName'
                autoFocus
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />

              <TextField
                margin='normal'
                variant='filled'
                required
                fullWidth
                name='lastName'
                label={t("auth.register.lastName")}
                type='text'
                id='lastName'
                autoComplete='current-password'
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </FlexBox>
            <FlexBox gap={"10px"}>
              <TextField
                margin='normal'
                variant='filled'
                required
                fullWidth
                id='yourEmail'
                label={t("auth.register.yourEmail")}
                name='yourEmail'
                
                type='email'
                value={formik.values.yourEmail}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.yourEmail)
                }
                helperText={formik.touched.firstName && formik.errors.yourEmail}
              />
              <TextField
                margin='normal'
                variant='filled'
                required
                fullWidth
                id='phoneNumber'
                label={t("auth.register.phoneNumber")}
                name='phoneNumber'
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                error={
                  formik.touched.phoneNumber &&
                  Boolean(formik.errors.phoneNumber)
                }
                helperText={
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                }
              />
            </FlexBox>
            <TextField
                margin='normal'
                variant='filled'
                required
                fullWidth
                id='content'
                label={t("auth.register.content")}
                name='content'
                type='text'
                multiline
                rows={2}
                value={formik.values.content}
                onChange={formik.handleChange}
                error={
                  formik.touched.content && Boolean(formik.errors.content)
                }
                helperText={formik.touched.content && formik.errors.content}
              />
            <LoadingButton
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3 }}
            >
              {t("auth.register.requestADemo")}
            </LoadingButton>
            <Box sx={{ textAlign: "center", marginTop: "10px" }}>
              <Link component={RouterLink} to={`/login`} variant='body2'>
                {t("auth.login.newAccount")}
              </Link>
            </Box>
          </Box>
        </BoxedLayout>
      </Grid>
    </Grid>
  );
};
