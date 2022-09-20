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
import { TextFields } from "@mui/icons-material";
import BoxedLayout from "@core/components/BoxedLayout";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { useFormik } from "formik";
import FlexBox from "@core/components/FlexBox";
import { TdSelect } from "@core/components/controls/TdSelect";

type PatientInfoProps = {
  data: any;
  onSuccess?: () => void;
  onError?: () => void;
};
export const PatientInfoForm = (props: PatientInfoProps) => {
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
            {t("patientInfo.title")}
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
                <FlexBox>
                  <TextField
                    margin='normal'
                    required
                    fullWidth
                    id='FullName'
                    label={t("patientInfo.fullName")}
                    name='FullName'
                  />
                </FlexBox>
                <FlexBox gap={"20px"}>
                  <TextField
                    margin='normal'
                    id='outlined-number'
                    label={t("patientInfo.DOBYear")}
                    type='number'
                  />
                  <TextField
                    id='Age'
                    margin='normal'
                    label={t("patientInfo.Age")}
                    type='number'
                  />
                  <TextField
                    id='DOBMonth'
                    margin='normal'
                    label={t("patientInfo.DOBMonth")}
                    type='number'
                  />
                  <TextField
                    margin='normal'
                    required
                    fullWidth
                    id='DOB'
                    label={t("patientInfo.DOB")}
                    name='DOB'
                  />
                </FlexBox>
                <FlexBox gap={"20px"}>
                  <TdSelect data={[{ Id: 1, Text: "Female" }, { Id: 2, Text: "Male" }, { Id: 3, Text: "Other" }]}
                    sx={{ marginTop: "16px", marginBottom: "8px" }} labelI18nKey={'patientInfo.materialStatus'}
                     />

                  <TdSelect data={[{ Id: 1, Text: "Single" }, { Id: 2, Text: "Marriage" }, { Id: 3, Text: "Unknown" }]}
                    sx={{ marginTop: "16px", marginBottom: "8px" }} labelI18nKey={'patientInfo.materialStatus'}
                    />
                 
                </FlexBox>

                <FlexBox>
                  <TextField
                    margin='normal'
                    required
                    fullWidth
                    id='Address'
                    label={t("patientInfo.address")}
                    name='Address'
                  />
                </FlexBox>
                <FlexBox gap={"20px"}>
                  <Autocomplete
                    options={[]}
                    title={t("patientInfo.city")}
                    id='city'
                    sx={{
                      width: "100%",
                      marginTop: "16px",
                      marginBottom: "8px",
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder={t("patientInfo.city")}
                        label={t("patientInfo.city")}
                      />
                    )}
                  />

                  <Autocomplete
                    id='city'
                    options={[]}
                    title={t("patientInfo.district")}
                    sx={{
                      width: "100%",
                      marginTop: "16px",
                      marginBottom: "8px",
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder={t("patientInfo.district")}
                        label={t("patientInfo.district")}
                      />
                    )}
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
