import { Badge, Box, Card, CardContent, CardHeader, Chip, Grid, IconButton, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import FlexBox from "@core/components/FlexBox";
import { usePatientDashboardStyles } from "../pages/PatientDashboard";
import { PatientDashboardAllergiesForm } from "./PatientDashboardAllergiesForm";

type AllergiesBlockProps = {
  data: any;
};
export const PatientDashboardAllergies = ({ data }: AllergiesBlockProps) => {
    const { t } = useTranslation()
    const styles = usePatientDashboardStyles()
  return (
    <Card sx={{ marginBottom: "16px" }}>
      <CardHeader
        action={
         
          <PatientDashboardAllergiesForm data={data}/>
        }
        title={t("patientDashboard.allergies.title")}
      />
      <CardContent>
        <Grid container>
          {data &&
            data.Allergies.map((allergies, index) => {
              return (
                <Grid key={`allergies_${index}`} item xs={12}>
                  <FlexBox
                    justifyContent={"space-between"}
                    className={styles.medicalItem}
                  >
                    <Box>
                      <Typography variant='h6' color='text.primary'>
                        {allergies.Name}
                      </Typography>
                      <Typography
                        component='span'
                        className={styles.profileSubheader}
                      >
                        {allergies.Note}
                      </Typography>
                    </Box>
                    <Box>
                      <Chip
                        label={allergies.Piority}
                        size='small'
                        color={allergies.Piority == "High" ? "error" : "info"}
                      />
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
