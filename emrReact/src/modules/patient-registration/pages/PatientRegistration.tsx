import FlexBox from '@core/components/FlexBox';
import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Radio,
  RadioGroup,
  Tab,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SearchIcon from '@mui/icons-material/Search';
import { PatientRegistrationProfile } from '../components/patient-registration/PatientRegistrationProfile';
import { PatientInfoForm } from 'modules/shared/components/PatientInfo';
import medicationExaminationService from '@core/services/medicationExaminationService';
import { IPatientDashboard } from '@core/models/patients/patientModel';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import styled from '@emotion/styled';

const enum ServiceGroupEnum {
  Service = 1,
  Image = 2,
  Test = 3,
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
];

const AutocompleteWrapper = styled(Autocomplete)(() => ({
  width: '100%',
  marginTop: '16px',
  marginBottom: '8px',
}));

export const PatientRegistration = () => {
  const { t } = useTranslation();
  const [patient, setPatient] = useState<IPatientDashboard>(undefined);
  const [serviceGroupId, setServiceGroupId] = useState(ServiceGroupEnum.Service);
  const [tabIndex, setTabIndex] = React.useState('1');

  const tabIndexChanged = (event: React.SyntheticEvent, newValue: string) => {
    setTabIndex(newValue);
  };

  useEffect(() => {
    setPatient(medicationExaminationService.getPatient());
  }, []);

  const serviceGroupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log((e.target as HTMLInputElement).value);
    setServiceGroupId(parseInt((e.target as HTMLInputElement).value));
  };
  const searchPatient = (e) => {};

  const renderServiceForm = () => {
    return (
      <Box component='form'>
        <FormControl>
          {/* <FormLabel id='demo-row-radio-buttons-group-label'>{t('patientRegistration.allergies.type')}</FormLabel> */}
          <RadioGroup
            onChange={serviceGroupChange}
            row
            value={serviceGroupId}
            aria-labelledby='demo-row-radio-buttons-group-label'
            name='row-radio-buttons-group'
          >
            <FormControlLabel
              value={ServiceGroupEnum.Service}
              control={<Radio />}
              label={t('patientRegistration.serviceLabel')}
            />
            <FormControlLabel value={ServiceGroupEnum.Image} control={<Radio />} label={t('patientRegistration.imageLabel')} />
            <FormControlLabel value={ServiceGroupEnum.Test} control={<Radio />} label={t('patientRegistration.testService')} />
          </RadioGroup>
        </FormControl>
        {serviceGroupId == ServiceGroupEnum.Service && (
          <>
            <Grid spacing={2} container>
              <Grid item md={5}>
                <AutocompleteWrapper
                  size={'small'}
                  options={[]}
                  title={t('patientRegistration.serviceTypeLabel')}
                  renderInput={(params) => <TextField {...params} label={t('patientRegistration.serviceTypeLabel')} />}
                />
              </Grid>
              <Grid item md={4}></Grid>
            </Grid>
            <Grid spacing={2} container>
              <Grid item md={8}>
                <AutocompleteWrapper
                  size={'small'}
                  options={[]}
                  title={t('patientRegistration.allergies.serviceLabel')}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label={t('patientRegistration.serviceLabel')}
                      placeholder={t('patientRegistration.serviceLabel')}
                    />
                  )}
                />
              </Grid>
              <Grid item md={3}>
                <AutocompleteWrapper
                  id='city'
                  size={'small'}
                  options={[]}
                  title={t('patientRegistration.roomLabel')}
                  renderInput={(params) => <TextField {...params} label={t('patientRegistration.roomLabel')} />}
                />
              </Grid>
            </Grid>
          </>
        )}
        {serviceGroupId == ServiceGroupEnum.Image && (
          <>
            <Grid spacing={2} container>
              <Grid item md={5}>
                <AutocompleteWrapper
                  size={'small'}
                  options={[]}
                  title={t('patientRegistration.imageTypeLabel')}
                  renderInput={(params) => <TextField {...params} label={t('patientRegistration.imageTypeLabel')} />}
                />
              </Grid>
              <Grid item md={4}></Grid>
            </Grid>
            <Grid spacing={2} container>
              <Grid item md={8}>
                <AutocompleteWrapper
                  size={'small'}
                  options={[]}
                  title={t('patientRegistration.allergies.subClinicalLabel')}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label={t('patientRegistration.subClinicalLabel')}
                      placeholder={t('patientRegistration.subClinicalLabel')}
                    />
                  )}
                />
              </Grid>
              <Grid item md={3}>
                <AutocompleteWrapper
                  id='city'
                  size={'small'}
                  options={[]}
                  title={t('patientRegistration.roomLabel')}
                  renderInput={(params) => <TextField {...params} label={t('patientRegistration.roomLabel')} />}
                />
              </Grid>
            </Grid>
          </>
        )}
        {serviceGroupId == ServiceGroupEnum.Test && (
          <>
            <Grid spacing={2} container>
              <Grid item md={4}>
                <AutocompleteWrapper
                  size={'small'}
                  options={[]}
                  title={t('patientRegistration.testTypeLabel')}
                  renderInput={(params) => <TextField {...params} label={t('patientRegistration.testTypeLabel')} />}
                />
              </Grid>
              <Grid item md={4}>
                <AutocompleteWrapper
                  size={'small'}
                  options={[]}
                  title={t('patientRegistration.allergies.testComboLabel')}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label={t('patientRegistration.testComboLabel')}
                      placeholder={t('patientRegistration.testComboLabel')}
                    />
                  )}
                />
              </Grid>
            </Grid>
            <Grid spacing={2} container>
              <Grid item md={8}>
                <AutocompleteWrapper
                  size={'small'}
                  options={[]}
                  title={t('patientRegistration.allergies.testNameLabel')}
                  sx={{
                    width: '100%',
                    marginTop: '16px',
                    marginBottom: '8px',
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label={t('patientRegistration.testNameLabel')}
                      placeholder={t('patientRegistration.testNameLabel')}
                    />
                  )}
                />
              </Grid>
              <Grid item md={3}>
                <AutocompleteWrapper
                  id='city'
                  size={'small'}
                  options={[]}
                  title={t('patientRegistration.roomLabel')}
                  renderInput={(params) => <TextField {...params} label={t('patientRegistration.roomLabel')} />}
                />
              </Grid>
            </Grid>
          </>
        )}
      </Box>
    );
  };
  return (
    <React.Fragment>
      <Toolbar sx={{ marginBottom: '10px' }}>
        <FlexBox alignItems={'center'} gap={'18px'}>
          <Typography variant='h2' component='h4'>
            {t('patientRegistration.title')}
          </Typography>
          <Paper
            component='form'
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', border: '1px solid #d4d4d4', width: 250 }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              onKeyDown={searchPatient}
              placeholder={t('patientRegistration.searchPatient')}
              inputProps={{ 'aria-label': t('common.search') }}
            />
            <IconButton type='button' sx={{ p: '4px' }} aria-label='search'>
              <SearchIcon />
            </IconButton>
          </Paper>
          <PatientInfoForm isCreate={true} data={null} />
        </FlexBox>
      </Toolbar>
      <Grid container spacing={2}>
        <Grid item md={3} lg={3}>
          <PatientRegistrationProfile data={patient} />
        </Grid>
        <Grid item md={9} lg={9}>
          <Card sx={{minHeight:"80vh"}}>
            <CardHeader title={t('patientRegistration.service')} />
            <CardContent>
              {renderServiceForm()}

              <Divider sx={{ margin: '10px 0' }} />

              <Typography component='h5' variant='h5' sx={{ marginBottom: '12px', marginTop: '8px' }}>
                {t('patientRegistration.medicalExaminationSection')}
              </Typography>
              <DataGrid autoHeight={true} hideFooter={true} rows={rows} columns={columns} pageSize={100} />
              <Typography component='h5' variant='h5' sx={{ marginBottom: '12px', marginTop: '8px' }}>
                {t('patientRegistration.subclinicalSection')}
              </Typography>
              <DataGrid autoHeight={true} hideFooter={true} rows={rows} columns={columns} pageSize={100} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
