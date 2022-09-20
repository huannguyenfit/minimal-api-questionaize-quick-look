import { Badge, Box, Card, CardContent, CardHeader, Chip, Grid, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useTranslation } from "react-i18next";
import FlexBox from "@core/components/FlexBox";
import { usePatientDashboardStyles } from "modules/medical-examination/pages/PatientDashboard";

type MedicalHistoryBlockProps = {
  data: any;
};
export const PatientDashboardMedicalHistory = ({ data }: MedicalHistoryBlockProps) => {
    const { t } = useTranslation()
    const styles = usePatientDashboardStyles()
    return (
      <Card>
        <CardHeader title={t("patientDashboard.medicalHistory")} />
        <CardContent>
          <Grid container spacing={2}>
            {data &&
              data?.Histories.map((history, index) => {
                return (
                  <Grid key={`medicals_${index}`} item xs={12}>
                    <FlexBox
                      justifyContent={"space-between"}
                      className={styles.medicalItem}
                    >
                      <Box>
                        <Typography variant='h6' color='text.primary'>
                          {history.Name}
                        </Typography>
                        <Typography
                          component='span'
                          className={styles.profileSubheader}
                        >
                          {history.DoctorName}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          component='span'
                          className={styles.profileSubheader}
                        >
                          {history.CreatedOn}
                        </Typography>
                      </Box>
                    </FlexBox>
                  </Grid>
                );
              })}
          </Grid>
        </CardContent>
      </Card>
    );
};
