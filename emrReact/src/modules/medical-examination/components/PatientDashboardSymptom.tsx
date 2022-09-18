import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { usePatientDashboardStyles } from "../pages/PatientDashboard";

type SymptomBlockProps = {
  data: any;
};
export const PatientDashboardSymptom = ({ data }: SymptomBlockProps) => {
  const { t } = useTranslation();
  const styles = usePatientDashboardStyles();
  return (
    <Card sx={{ marginBottom: "16px", width: "100%", minHeight: "242px" }}>
      <CardHeader title={t("patientDashboard.symptom")} />
      <CardContent
        sx={{ paddingTop: "10px", paddingBottom: "10px !important" }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Typography component='span' className={styles.profileSubheader}>
              <TextField
                multiline
                sx={{ width: "100%" }}
                size='small'
                rows={1}
                defaultValue={"Chóng mặt, hoa mắt, đau vai gáy"}
              />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              component='h5'
              variant='h5'
              sx={{ marginBottom: "12px", marginTop: "8px" }}
            >
              {t("patientDashboard.diseaseProgression")}
            </Typography>
            <Typography component='span' className={styles.profileSubheader}>
              <TextField
                multiline
                sx={{ width: "100%" }}
                size='small'
                rows={1}
                defaultValue={"Ngày trước có ăn bậy, thức khuya, có uống bia"}
              />
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
