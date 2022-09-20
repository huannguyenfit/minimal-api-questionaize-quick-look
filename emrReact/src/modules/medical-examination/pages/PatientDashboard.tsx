import FlexBox from "@core/components/FlexBox";
import {
  Toolbar,
  Typography,
  Grid,
  Breadcrumbs,
  Link,
  Card,
  CardContent,
  Avatar,
  IconButton,
  Badge,
  Divider,
  Chip,
  CardHeader,
  Tooltip,
  Autocomplete,
  TextField,
  Tab,
} from "@mui/material";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { MoreVert } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Close";
import { Box } from "@mui/system";

import { styled } from "@mui/material/styles";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import AddIcon from "@mui/icons-material/Add";
import { icd10s, patientData } from "../mocks";
import PerfectScrollbar from "react-perfect-scrollbar";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { PatientDashboardAllergies } from "../components/patient-dashboard/PatientDashboardAllergies";
import { PatientDashboardProfile } from "../components/patient-dashboard/PatientDashboardProfile";
import { PatientDashboardMedicalHistory } from "../components/patient-dashboard/PatientDashboardMedicalHistory";
import { PatientDashboardRisk } from "../components/patient-dashboard/PatientDashboardRisk";
import { PatientDashboardSymptom } from "../components/patient-dashboard/PatientDashboardSymptom";
import Empty from "@core/components/Empty";
import { makeStyles } from "@mui/styles";
import { toggleLoading } from "@core/components/loading/Loading";
import { PatientDashboardDiagnosisForm } from "../components/patient-dashboard/PatientDashboardDisanosisForm";
import medicationExaminationService from "@core/services/medicationExaminationService";
import { IPatientDashboard } from "@core/models/patients/patientModel";
import { TdSelect } from "@core/components/controls/TdSelect";
const service = medicationExaminationService;

export const usePatientDashboardStyles = makeStyles({
  profileCard: {
    borderRadius: 12,
    minWidth: 256,
    textAlign: "center",
    overflow: "unset",
    position: "relative",
    marginBottom: 16,
  },
  profileAvatar: {
    left: "50%",
    width: 80,
    height: 80,
    margin: "auto",
    position: "absolute",
    transform: "translate(-50%)",
    border: "1px solid #a1a1a1",
    top: -24,
  },
  profileHeading: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: "0.5px",
    marginTop: 8,
    marginBottom: 0,
  },
  profileSubheader: {
    fontSize: "0.8125rem",
    color: "#607D8B",
    marginBottom: "0.875em",
  },
  profileStatLabel: {
    fontSize: "0.8125rem",
    color: "#607D8B",
    fontWeight: 500,
    margin: 0,
  },
  profileStatValue: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    marginTop: 4,
  },
  medicalItem: {
    padding: "6px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  },
});

export const ChipIcdInfoWrapper = styled(Avatar)`
  border: 1px solid #b7e2ff;
  background: #c3e6ff;
  width: fit-content !important;
  border-radius: 7px;
  color: #13104b !important;
  font-weight: bold;
  padding: 0 3px;
`;

export const IcdInfoWrapper = styled(Avatar)`
  border: 1px solid #b7e2ff;
  background: #c3e6ff;
  width: fit-content !important;
  border-radius: 7px;
  color: #13104b !important;
  font-weight: bold;
  padding: 0 3px;
  font-size: 0.857rem;
  height: 20px;
`;

export const ChipSmall = styled(Chip)(({ }) => ({
  //fontWeight: "bold",
  //...
  "& .MuiChip-labelSmall": {
    fontWeight: 500,
  },
}));

export const PatientDashboard = () => {
  const { t } = useTranslation();
  const [tabIndex, setTabIndex] = React.useState("1");
  const [patient, setPatient] = React.useState<IPatientDashboard>(undefined);
  const [icdValue, setIcdValue] = React.useState<string>("");
  const [searchICDValue, setSearchICDValue] = React.useState<string>("");

  useEffect(() => {
    setPatient(service.getPatient())
  }, [])

  const tabIndexChanged = (event: React.SyntheticEvent, newValue: string) => {
    setTabIndex(newValue);
  };

  const styles = usePatientDashboardStyles();
  const dignosisFreeTextDoubleClick = (item) => {
    setIcdValue(item.FreeText);
  };

  const icd10OnChange = (event, newValue) => {
    if (event.keyCode == 13) {

      let newPatient = { ...patient };
      if (typeof newValue === "string") {
        // timeout to avoid instant validation of the dialog's form.
        newPatient.Diagnosis.push({
          Id: newPatient.Diagnosis.length,
          FreeText: newValue,
          IcdName: "",
          Checked: false,
          Checked2: false,
          IcdCode: "",
        });
        setPatient(newPatient);
        setIcdValue("");
        setSearchICDValue("");
      } else if (newValue && newValue.inputValue) {
        console.log(newValue.inputValue);
      } else {
        if (newValue) {
          newPatient.Diagnosis.push({
            Id: newPatient.Diagnosis.length,
            FreeText: "",
            IcdName: newValue.NameEnglish,
            Checked: false,
            Checked2: false,
            IcdCode: newValue.Code,
          });
          setPatient(newPatient);
          setIcdValue('');
          setSearchICDValue("");
        }

        
      }
    }

  };
  const renderDiagnose = () => {
    return (
      <Card sx={{ marginBottom: "16px", width: "100%", minHeight: "340px" }}>
        <CardHeader
          action={
            patient && <PatientDashboardDiagnosisForm data={patient} />

          }
          title={t("patientDashboard.diagnose")}
        />
        <CardContent
          sx={{ paddingTop: "10px", paddingBottom: "10px !important" }}
        >
          {/* <Empty /> */}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FlexBox flexWrap={"wrap"} gap={"5px"} alignItems={"center"}>
                <Autocomplete
                  value={icdValue}
                  onChange={(event, newValue) => {
                    icd10OnChange(event, newValue);
                  }}
                  id='free-solo-dialog-demo'
                  options={icd10s}
                  size='small'
                  sx={{ width: "100%", marginBottom: "10px" }}
                  getOptionLabel={(option) => {
                    // e.g value selected with enter, right from the input
                    if (typeof option === "string") {
                      return option;
                    }
                    return `${option.Code} - ${option.NameEnglish}`;
                  }}
                  selectOnFocus
                  clearOnBlur
                  handleHomeEndKeys
                  renderOption={(props, option) => {
                    return (
                      <li {...props}>
                        {option.Code} - {option.NameEnglish}
                      </li>
                    )
                  }}
                  freeSolo
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      value={searchICDValue}
                      placeholder='Quick search ICD-10 or Free text'
                    />
                  )}
                />

                {patient &&
                  patient.Diagnosis.map((item, index) => {
                    if (!item.FreeText) {
                      return (
                        <Tooltip key={`chip_${index}`} title={`${item.IcdCode} - ${item.IcdName}`}>
                          <ChipSmall
                            size='small'
                            avatar={
                              <ChipIcdInfoWrapper>{item.IcdCode}</ChipIcdInfoWrapper>
                            }
                            label={item.IcdName}
                            sx={{ textOverflow: "ellipsis" }}
                            onDelete={() => handleRemoveDiagnosis(item)}
                            deleteIcon={<DeleteIcon />}
                            variant='outlined'
                          />
                        </Tooltip>
                      )
                    }
                    return (
                      <Tooltip key={`chip_${index}`}  title={item.FreeText}>
                        <ChipSmall
                          size='small'
                          label={item.FreeText}
                          sx={{ textOverflow: "ellipsis" }}
                          onDelete={() => handleRemoveDiagnosis(item)}
                          onClick={() => dignosisFreeTextDoubleClick(item)}
                          deleteIcon={<DeleteIcon />}
                          variant='outlined'
                        />
                      </Tooltip>
                    )
                  })}

                {(!patient || patient.Diagnosis.length == 0) && <Empty />}
              </FlexBox>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  };

  const renderPrescription = () => {
    return (
      <Card>
        <CardHeader
          title={t("patientDashboard.prescription")}
          action={
            patient && <PatientDashboardDiagnosisForm data={patient} />
          }
        />

        <CardContent sx={{ paddingTop: '0px' }}>
          <TdSelect size={"small"} data={[{ Id: 1, Text: "Toa Bs 1" }, { Id: 2, Text: "Toa Bs 2" }, { Id: 3, Text: "Toa Bs 3" }]}
            sx={{ marginTop: "16px", marginBottom: "8px" }} labelI18nKey={'patientInfo.prescriptionByDoctor'}
          />

          <PerfectScrollbar
            style={{
              height: "200px",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box className={styles.medicalItem}>
                  <Typography variant='h6' color='text.primary'>
                    Aspirin 3mg
                  </Typography>
                  <Typography
                    component='small'
                    className={styles.profileSubheader}
                  >
                    Ngày 2 lần - Sáng 1 - Chiều 1
                  </Typography>
                </Box>
              </Grid>
              <Divider />

              <Grid item xs={12}>
                <Box className={styles.medicalItem}>
                  <Typography variant='h6' color='text.primary'>
                    Paracetamol
                  </Typography>
                  <Typography
                    component='span'
                    className={styles.profileSubheader}
                  >
                    Ngày 2 lần - Sáng 1 - Chiều 1
                  </Typography>
                </Box>
              </Grid>
              <Divider />
              <Grid item xs={12}>
                <Box className={styles.medicalItem}>
                  <Typography variant='h6' color='text.primary'>
                    Telanol (gói)
                  </Typography>
                  <Typography
                    component='span'
                    className={styles.profileSubheader}
                  >
                    Ngày 2 lần - Sáng 1 - Chiều 1 (Sau ăn)
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </PerfectScrollbar>
        </CardContent>
      </Card>
    );
  };

  const renderSubclinical = () => {
    return (
      <Card sx={{ marginBottom: "16px", width: "100%", minHeight: "300px" }}>
        <CardContent
          sx={{ paddingTop: "10px", paddingBottom: "10px !important" }}
        >
          <TabContext value={tabIndex}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList onChange={tabIndexChanged}>
                <Tab label={t("patientDashboard.subclinical")} value='1' />
                <Tab
                  label={t("patientDashboard.subclinicalResult")}
                  value='2'
                />
              </TabList>
            </Box>
            <TabPanel value='1'>Item One</TabPanel>
            <TabPanel value='2'>Item Two</TabPanel>
          </TabContext>
        </CardContent>
      </Card>
    );
  };

  const handleRemoveDiagnosis = (item) => {
    const newPatient = { ...patient };
    newPatient.Diagnosis = newPatient.Diagnosis.filter((o) => o.Id != item.Id);
    setPatient(newPatient);
  };

  return (
    <React.Fragment>
      <Toolbar sx={{ paddingTop: "10px", paddingBottom: "10px !important" }}>
        <Breadcrumbs aria-label='breadcrumb'>
          <Typography color='text.primary'>Patients</Typography>
          <Typography color='text.success'>
            [KB2200001192 - Health check service]
          </Typography>

          <Link underline='hover' color='inherit'>
            <Typography variant='h4' component='h6' color='text.primary'>
              <Badge
                sx={{ width: "25px" }}
                badgeContent={"Inprocessing"}
                color='success'
              ></Badge>
            </Typography>
          </Link>
          <Typography
            sx={{
              position: "absolute",
              right: 0,
              bottom: "23px",
              display: "flex",
              alignItems: "center",
            }}
            color='text.success'
          >
            <UpdateOutlinedIcon /> Check-in: <b>20/11/2022 10:30am </b>
          </Typography>
        </Breadcrumbs>
      </Toolbar>
      <Grid mb={3} container spacing={2}>
        <Grid item md={3} lg={3}>
          {patient && <PatientDashboardProfile data={patient} />}
          {patient && <PatientDashboardAllergies data={patient} />}
          {patient && <PatientDashboardMedicalHistory data={patient} />}
        </Grid>

        <Grid item md={9} lg={9}>
          <Grid container spacing={2}>
            <Grid item md={5} lg={5}>
              {patient && <PatientDashboardRisk data={patient} />}
            </Grid>
            <Grid item md={7} lg={7}>
              {patient && <PatientDashboardSymptom data={patient} />}
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item md={7} lg={7}>
              {renderDiagnose()}
            </Grid>
            <Grid item md={5} lg={5}>
              {renderPrescription()}
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item md={12} lg={12}>
              {renderSubclinical()}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item md={4} lg={4}></Grid>
      </Grid>
    </React.Fragment>
  );
};
