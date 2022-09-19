import {
  Badge,
  Box,
  Button,
  Container,
  Drawer,
  Grid,
  IconButton,
  Paper,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { TextFields } from "@mui/icons-material";
import BoxedLayout from "@core/components/BoxedLayout";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { useFormik } from "formik";
import FlexBox from "@core/components/FlexBox";

type PatientInfoProps = {
  data: any;
  onSuccess?: () => void;
  onError?: () => void;
};
export const PatientDashboardRiskForm = (props: PatientInfoProps) => {
  const { data } = props;
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();
  const showDrawer = () => {
    setVisible(true);
  };
  const handleLogin = () => {};
  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => handleLogin(),
  });
  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <IconButton onClick={showDrawer}>
        <Badge color='error' badgeContent={0}>
          <EditIcon sx={{ color: "text.disabled", fontSize: "1.3rem" }} />
        </Badge>
      </IconButton>

      <Drawer anchor={"right"} open={visible} onClose={() => onClose()}>
        <Toolbar
          sx={{
            mt: 1.5,
            diplay: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <Typography variant='h5' component='h6'>
            {t("patientDashboard.risk.title")}
          </Typography>
        </Toolbar>
        <Grid container sx={{ height: "100vh" }}>
          <Grid item xs={12} component={Paper} square>
            <Container component='main' maxWidth='md' sx={{ mt: 1 }}>
              <Box
                component='form'
                marginTop={3}
                noValidate
                onSubmit={formik.handleSubmit}
              >
                <TextField
                  margin='normal'
                  required
                  multiline
                  rows={2}
                  fullWidth
                  id='risksmoke'
                  label={t("patientDashboard.risk.smoke")}
                  name='Smoke'
                />
                <TextField
                  margin='normal'
                  required
                  multiline
                  rows={2}
                  fullWidth
                  id='alcohol'
                  label={t("patientDashboard.risk.alcohol")}
                  name='alcohol'
                />
                <TextField
                  margin='normal'
                  required
                  multiline
                  rows={2}
                  fullWidth
                  id='diabetes'
                  label={t("patientDashboard.risk.diabetes")}
                  name='Diabetes'
                />
                  <TextField
                  margin='normal'
                  required
                  multiline
                  rows={2}
                  fullWidth
                  id='diabetes'
                  label={t("patientDashboard.risk.hypertension")}
                  name='Diabetes'
                />
                  <TextField
                  margin='normal'
                  required
                  multiline
                  rows={2}
                  fullWidth
                  id='other'
                  label={t("patientDashboard.risk.other")}
                  name='other'
                />
              </Box>
            </Container>
          </Grid>

          <Grid item xs={12} component={Paper} square>
            <FlexBox
              sx={{
                position: "absolute",
                bottom: 10,
                gap: "10px",
                right: 22,
                justifyContent: "space-between",
              }}
            >
              <Button variant='outlined'> {t("common.cancel")} </Button>
              <LoadingButton type='submit' variant='contained'>
                {t("common.submit")}
              </LoadingButton>
            </FlexBox>
          </Grid>
        </Grid>
      </Drawer>
    </>
  );
};
