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
  Grid,
  IconButton,
  Tab,
  TextField,
  Tooltip,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import { useFormik } from "formik";
import FlexBox from "@core/components/FlexBox";
import { Transition } from "@core/components/features/Transition";
import DeleteIcon from "@mui/icons-material/Close";

import { icd10s } from "modules/medical-examination/mocks";
import { ChipSmall, IcdInfoWrapper } from "modules/medical-examination/pages/PatientDashboard";
import Empty from "@core/components/Empty";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

type PatientInfoProps = {
  data: any;
  onSuccess?: () => void;
  onError?: () => void;
};
export const PatientDashboardDiagnosisForm = (props: PatientInfoProps) => {
  const { data } = props;
  const [visible, setVisible] = useState(false);
  const [searchICDValue, setSearchICDValue] = useState<string>("");
  const [icdInputValue, setIcdInputValue] = useState("");
  const [icdValue, setIcdValue] = useState<string>("");
  const [tabIndex, setTabIndex] = React.useState("1");

  const tabIndexChanged = (event: React.SyntheticEvent, newValue: string) => {
    setTabIndex(newValue);
  };

  const { t } = useTranslation();
  const showDrawer = () => {
    setVisible(true);
  };
  const handleLogin = () => { };
  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => handleLogin(),
  });
  const onClose = () => {
    setVisible(false);
  };
  const diagnosisFreeTextDoubleClick = (item) => {
    setIcdValue(item.FreeText);
  };

  const handleRemoveDiagnosis = (item) => {
    const newPatient = { ...data };
    newPatient.Diagnosis = newPatient.Diagnosis.filter((o) => o.Id != item.Id);
    //setPatient(newPatient);
  };

  const icd10OnChange = (event, newValue) => {
    if (event.keyCode == 13) {

      let newPatient = { ...data };
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
          setIcdValue('');
          setSearchICDValue("");
        }

      }
    }

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
        maxWidth={"lg"}
        onClose={onClose}
      >
        <DialogContent>

          <Grid container>
            <Grid item xs={5}>
              <DialogTitle display={"flex"} sx={{ padding: "16px 0px" }} flexDirection={"column"}>
                {t("patientDashboard.diagnosisForm.title")}
              </DialogTitle>
              <Card>
                <CardContent   >
                  <FlexBox flexWrap={"wrap"} gap={"5px"} alignItems={"center"}>
                    <Autocomplete
                      value={icdValue}
                      onChange={(event, newValue) => {
                        icd10OnChange(event, newValue);
                      }}
                      id='dianoisForm'
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
                          <li {...props} key={option.Id}>
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

                    {data &&
                      data?.Diagnosis.map((item, index) => {
                        if (!item.FreeText) {
                          return (
                            <Tooltip
                              key={`diagnosisForm_${item.Id}`}
                              title={`${item.IcdCode} - ${item.IcdName}`}
                            >
                              <ChipSmall
                                size='small'
                                avatar={
                                  <IcdInfoWrapper>{item.IcdCode}</IcdInfoWrapper>
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
                          <Tooltip
                            key={`diagnosisForm_${item.Id}`}
                            title={`${item.IcdCode} - ${item.IcdName}`}
                          >
                            <ChipSmall
                              size='small'
                              label={item.FreeText}
                              sx={{ textOverflow: "ellipsis" }}
                              onDelete={() => handleRemoveDiagnosis(item)}
                              onClick={() => diagnosisFreeTextDoubleClick(item)}
                              deleteIcon={<DeleteIcon />}
                              variant='outlined'
                            />
                          </Tooltip>
                        );
                      })}
                    {(!data || data?.Diagnosis.length == 0) && <Empty />}
                  </FlexBox>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={7}>
              <DialogTitle display={"flex"} sx={{ padding: "16px 0px" }} flexDirection={"column"}>
                {t("patientDashboard.diagnosisForm.prescriptionTitle")}
              </DialogTitle>
              <Card sx={{ marginBottom: "16px", width: "100%", minHeight: "300px" }}>
                <CardContent
                  sx={{ paddingTop: "10px", paddingBottom: "10px !important" }}
                >
                  <Autocomplete
                    value={icdValue}
                    onChange={(event, newValue) => {
                      icd10OnChange(event, newValue);
                    }}
                    id='dianoisForm'
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
                        <li {...props} key={option.Id}>
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
                    )}></Autocomplete>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

        </DialogContent>
        <DialogActions>
          <Button size="small" variant='outlined'> {t("common.cancel")} </Button>
          <LoadingButton size="small" type='submit' variant='contained'>
            {t("common.submit")}
          </LoadingButton>
        </DialogActions>
      </Dialog >
    </>
  );
};






{/* 
                    <TableContainer component={Paper}>
                      <Table sx={{ width: 450 }} size="small">
                        <TableHead>
                          <TableRow>
                            <TableCell>ICD-10</TableCell>
                            <TableCell>Ch</TableCell>
                            <TableCell>Bs</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell >#</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {data &&
                            data?.Diagnosis.map((row) => (
                              <TableRow
                                key={`diagnoisTable_${row.Id}`}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                              >
                                <TableCell component="th" scope="row">
                                  <FlexBox>
                                    <>
                                      {!row.FreeText && (
                                        <>
                                          <IcdInfoWrapper>{row.IcdCode}</IcdInfoWrapper>
                                          {row.IcdName}
                                        </>
                                      )}

                                      {row.FreeText && (<>{row.FreeText}</>)
                                      }


                                    </>
                                  </FlexBox>
                                </TableCell>
                                <TableCell align="right">{row.Ch}</TableCell>
                                <TableCell align="right">{row.Bs}</TableCell>
                                <TableCell align="right">{row.Status}</TableCell>
                                <TableCell align="right">
                                  <IconButton onClick={showDrawer}>
                                    <Badge color='error' badgeContent={0}>
                                      <DeleteIcon sx={{ color: "text.disabled", fontSize: "1.3rem" }} />
                                    </Badge>
                                  </IconButton>
                                </TableCell>
                              </TableRow>
                            ))}
                          {(!data || data?.Diagnosis.length == 0) && (<TableRow><Empty /></TableRow>)}
                        </TableBody>
                      </Table>
                    </TableContainer> */}