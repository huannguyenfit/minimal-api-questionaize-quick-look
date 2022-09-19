import {
  Autocomplete,
  Badge,
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { useFormik } from "formik";
import FlexBox from "@core/components/FlexBox";
import { Transition } from "@core/components/features/Transition";

type PatientInfoProps = {
  data: any;
  onSuccess?: () => void;
  onError?: () => void;
};
export const PatientDashboardAllergiesForm = (props: PatientInfoProps) => {
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
          <AddIcon sx={{ color: "text.disabled", fontSize: "1.3rem" }} />
        </Badge>
      </IconButton>

      <Dialog
        open={visible}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        // PaperComponent={DraggableComponent}
      >
        <DialogTitle display={"flex"} flexDirection={"column"}>
          {t("patientDashboard.allergies.title")}
        </DialogTitle>
        <DialogContent>
          <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={12}>
                  <Box
                    component='form'
                    noValidate
                    onSubmit={formik.handleSubmit}
                  >
                    <FormControl>
                      <FormLabel id='demo-row-radio-buttons-group-label'>
                        {t("patientDashboard.allergies.type")}
                      </FormLabel>
                      <RadioGroup
                        row
                        aria-labelledby='demo-row-radio-buttons-group-label'
                        name='row-radio-buttons-group'
                      >
                        <FormControlLabel
                          value='byDrug'
                          control={<Radio />}
                          label={t("patientDashboard.allergies.byDrug")}
                        />
                        <FormControlLabel
                          value='byGroupDrug'
                          control={<Radio />}
                          label={t("patientDashboard.allergies.byGroupDrug")}
                        />
                        <FormControlLabel
                          value='byOther'
                          control={<Radio />}
                          label={t("patientDashboard.allergies.byOther")}
                        />
                      </RadioGroup>
                    </FormControl>
                    <Autocomplete
                      id='city'
                      options={[]}
                      title={t("patientDashboard.allergies.title")}
                      sx={{
                        width: "100%",
                        marginTop: "16px",
                        marginBottom: "8px",
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label={t("patientDashboard.allergies.title")}
                          placeholder={t("patientDashboard.allergies.title")}
                        />
                      )}
                    />
                    <TextField
                      margin='normal'
                      required
                      multiline
                      rows={2}
                      fullWidth
                      id='alcohol'
                      label={t("patientDashboard.allergies.effect")}
                      name='alcohol'
                    />
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </DialogContent>
        <DialogActions>
          <Button variant='outlined'> {t("common.cancel")} </Button>
          <LoadingButton type='submit' variant='contained'>
            {t("common.submit")}
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  );
};
