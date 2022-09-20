import {
  Autocomplete,
  Badge,
  Box,
  Button,
  Container,
  Drawer,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { useFormik } from "formik";
import FlexBox from "@core/components/FlexBox";
import { TdSelect } from "@core/components/controls/TdSelect";
import { chestMeasurements } from "modules/medical-examination/mocks";

type PatientInfoProps = {
  data: any;
  onSuccess?: () => void;
  onError?: () => void;
};
export const PatientDashboardProfileForm = (props: PatientInfoProps) => {
  const { data } = props;
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();
  const showDrawer = () => {
    setVisible(true);
  };
  const handleLogin = () => { };
  const formik = useFormik({
    initialValues: {
      username: "kietadmin",
      password: "200968",
    },
    validationSchema: Yup.object({
      username: Yup.string().required(t("common.validations.required")),
      password: Yup.string()
        .min(1, t("common.validations.min", { size: 1 }))
        .required(t("common.validations.required")),
    }),
    onSubmit: (values) => handleLogin(),
  });
  const onClose = () => {
    setVisible(false);
  };
  const chestMeasurementChange = (e) => {
    console.log(e)
  }
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
            {t("patientDashoard.physicalCondition.title")}
          </Typography>
          <Typography
            component='span'
            sx={{
              fontSize: "14px !important",
              color: "#607D8B",
              marginBottom: "0.875em",
            }}
          >
            {data?.Code}
          </Typography>
        </Toolbar>
        <Grid container sx={{ height: "100vh" }}>
          <Grid item xs={12} component={Paper} square>
            <Container component='main' maxWidth='md' sx={{ mt: 2 }}>
              <Box
                component='form'
                marginTop={3}
                noValidate
                onSubmit={formik.handleSubmit}
              >
                <FlexBox gap={"20px"}>
                  <TextField
                    margin='normal'
                    id='Height'
                    label={t("patientDashoard.physicalCondition.height")}
                    type='number'
                  />
                  <TextField
                    id='Weight'
                    margin='normal'
                    label={t("patientDashoard.physicalCondition.weight")}
                    type='number'
                  />
                  <TextField
                    id='BMI'
                    margin='normal'
                    disabled
                    label={t("patientDashoard.physicalCondition.BMI")}
                    type='number'
                  />
                </FlexBox>
                <FlexBox gap={"20px"}>
                  <TextField
                    margin='normal'
                    id='Systolic'
                    fullWidth
                    label={t("patientDashoard.physicalCondition.systolic")}
                    type='number'
                  />
                  <TextField
                    id='Diastolic'
                    fullWidth
                    margin='normal'
                    label={t("patientDashoard.physicalCondition.diastolic")}
                    type='number'
                  />
                </FlexBox>
                <FlexBox gap={"20px"}>
                  <TextField
                    margin='normal'
                    fullWidth
                    id='Pulse'
                    label={t("patientDashoard.physicalCondition.pulse")}
                    type='number'
                  />
                  <TextField
                    id='Breath'
                    margin='normal'
                    fullWidth
                    label={t("patientDashoard.physicalCondition.breath")}
                    type='number'
                  />
                </FlexBox>
                <FlexBox gap={"20px"}>
                  <TextField
                    margin='normal'
                    fullWidth
                    id='SpO2'
                    label={t("patientDashoard.physicalCondition.spO2")}
                    type='number'
                  />
                  <TextField
                    id='Temperature'
                    margin='normal'
                    fullWidth
                    label={t("patientDashoard.physicalCondition.temperature")}
                    type='number'
                  />
                </FlexBox>
                <FlexBox gap={"20px"}>
                  <TextField
                    id='chestMeasurements'
                    margin='normal'
                    fullWidth
                    label={t("patientDashoard.physicalCondition.chestMeasurements")}
                    type='number'
                  />

                  <TdSelect onChange={chestMeasurementChange} data={chestMeasurements}
                    sx={{ marginTop: "16px", marginBottom: "8px" }}
                    labelI18nKey={'patientDashoard.physicalCondition.chestMeasurementType'}
                  />
                </FlexBox>
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
