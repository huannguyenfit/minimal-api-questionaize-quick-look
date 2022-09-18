import FlexBox from '@core/components/FlexBox';
import {
  Toolbar,
  Typography,
  Grid,
  Breadcrumbs,
  Link,
  Card,
  CardContent,
  Avatar,
  Icon,
  IconButton,
  Badge,
  Divider,
  Chip,
  Button,
  CardHeader,
  Slider,
  Tooltip,
  Autocomplete,
  TextField,
  Tab,
  TextareaAutosize,
} from '@mui/material';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Apps, MoreVert } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';
import GaugeChart from 'react-gauge-chart';
import AirIcon from '@mui/icons-material/Air';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import LabelIcon from '@mui/icons-material/Label';
import DeleteIcon from '@mui/icons-material/Close';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import Empty from '@core/components/Empty';
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';
import AddIcon from '@mui/icons-material/Add';
import { top100Films } from './mocks';
import PerfectScrollbar from 'react-perfect-scrollbar';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const useStyles = makeStyles({
  profileCard: {
    borderRadius: 12,
    minWidth: 256,
    textAlign: 'center',
    overflow: 'unset',
    position: 'relative',
    marginBottom: 16,
  },
  profileAvatar: {
    left: '50%',
    width: 80,
    height: 80,
    margin: 'auto',
    position: 'absolute',
    transform: 'translate(-50%)',
    border: '1px solid #a1a1a1',
    top: -24,
  },
  profileHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    marginTop: 8,
    marginBottom: 0,
  },
  profileSubheader: {
    fontSize: 14,
    color: '#607D8B',
    marginBottom: '0.875em',
  },
  profileStatLabel: {
    fontSize: 12,
    color: '#607D8B',
    fontWeight: 500,
    margin: 0,
  },
  profileStatValue: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    marginTop: 4,
  },
  medicalItem: {
    padding: '6px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#f5f5f5',
    },
  },
});

const IcdInfoWrapper = styled(Avatar)`
  border: '1px solid #1271b3',
  background: '#1271b3',
  width: 'fit-content !important',
  border-radius: '7px',
  color: '#fff',
  font-weight: 'bold',
`;

export const PatientDashboard = () => {
  const { t } = useTranslation();
  const [tabIndex, setTabIndex] = React.useState('1');

  const tabIndexChanged = (event: React.SyntheticEvent, newValue: string) => {
    setTabIndex(newValue);
  };
  const styles = useStyles();

  const renderPhysicalCondition = () => {
    return (
      <Card sx={{ marginBottom: '16px' }}>
        <CardHeader
          title={t('patientDashboard.physicalCondition')}
          action={
            <IconButton>
              <Badge color='error' badgeContent={0}>
                <EditIcon sx={{ color: 'text.disabled', fontSize: '1.3rem' }} />
              </Badge>
            </IconButton>
          }
        />
        <CardContent sx={{ padding: '12px 12px 0 12px' }}>
          <FlexBox flexDirection={'column'} alignItems={'center'} gap={'10px'}>
            <FlexBox gap={'44px'}>
              {renderSystolicChart()}
              {renderDiastolicChart()}
            </FlexBox>
            <Divider />
            <FlexBox gap={'84px'}>{renderRemaining()}</FlexBox>
            <FlexBox sx={{ width: '72%' }} flexDirection={'column'} gap={'10px'}>
              <Slider aria-label='SpO2' defaultValue={30} valueLabelDisplay='auto' step={10} marks min={10} max={110} />
              <Slider aria-label='SpO2' defaultValue={60} valueLabelDisplay='auto' step={10} marks min={10} max={110} />
            </FlexBox>
          </FlexBox>
        </CardContent>
      </Card>
    );
  };
  const renderAllergies = () => {
    return (
      <Card sx={{ marginBottom: '16px' }}>
        <CardHeader
          action={
            <IconButton>
              <Badge color='error' badgeContent={0}>
                <AddIcon />
              </Badge>
            </IconButton>
          }
          title={t('patientDashboard.allergies')}
        />
        <CardContent>
          <Grid container>
            <Grid item xs={12}>
              <FlexBox justifyContent={'space-between'} className={styles.medicalItem}>
                <Box>
                  <Typography variant='h6' color='text.primary'>
                    Penicilin
                  </Typography>
                  <Typography component='span' className={styles.profileSubheader}>
                    More details ...
                  </Typography>
                </Box>
                <Box>
                  <Chip label='High' size='small' color='error' />
                </Box>
              </FlexBox>
            </Grid>
            <Grid item xs={12}>
              <FlexBox justifyContent={'space-between'} className={styles.medicalItem}>
                <Box>
                  <Typography variant='h6' color='text.primary'>
                    Tilorone
                  </Typography>
                  <Typography component='span' className={styles.profileSubheader}>
                    More details ...
                  </Typography>
                </Box>

                <Box>
                  <Chip label='Medium' size='small' color='info' />
                </Box>
              </FlexBox>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  };
  const renderMedicalHistory = () => {
    return (
      <Card>
        <CardHeader title={t('patientDashboard.medicalHistory')} />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FlexBox justifyContent={'space-between'} className={styles.medicalItem}>
                <Box>
                  <Typography variant='h6' color='text.primary'>
                    Medication History 3
                  </Typography>
                  <Typography component='span' className={styles.profileSubheader}>
                    Dr. Tommy
                  </Typography>
                </Box>
                <Box>
                  <Typography component='span' className={styles.profileSubheader}>
                    10/02/2022
                  </Typography>
                </Box>
              </FlexBox>
            </Grid>
            <Divider />

            <Grid  item xs={12}>
              <FlexBox justifyContent={'space-between'} className={styles.medicalItem}>
                <Box>
                  <Typography variant='h6' color='text.primary'>
                    Medication History 2
                  </Typography>
                  <Typography component='span' className={styles.profileSubheader}>
                    Dr. Christina
                  </Typography>
                </Box>
                <Box>
                  <Typography component='span' className={styles.profileSubheader}>
                    10/02/2022
                  </Typography>
                </Box>
              </FlexBox>
            </Grid>
            <Divider />
            <Grid item xs={12}>
              <FlexBox justifyContent={'space-between'} className={styles.medicalItem}>
                <Box>
                  <Typography variant='h6' color='text.primary'>
                    Medication History 2
                  </Typography>
                  <Typography component='span' className={styles.profileSubheader}>
                    Dr. Peter Ground
                  </Typography>
                </Box>
                <Box>
                  <Typography component='span' className={styles.profileSubheader}>
                    10/02/2022
                  </Typography>
                </Box>
              </FlexBox>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  };

  const renderSystolicChart = () => {
    const chartStyle = {
      width: '120px',
      height: '50px',
    };
    return (
      <FlexBox flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
        <Typography component='h6' color='text.primary'>
          {t('patientDashboard.Systolic')}
        </Typography>
        <GaugeChart
          id='gauge-chart1'
          style={chartStyle}
          nrOfLevels={20}
          arcWidth={0.3}
          arcsLength={[110, 120, 130, 140]}
          colors={['#ffbc31', '#137e1b', '#EA4228']}
          percent={120 / (110 + 140)}
          formatTextValue={() => ''}
        />
        <Typography component='h6' fontWeight={600} color='text.primary'>
          120 mmHg
        </Typography>
      </FlexBox>
    );
  };

  const renderDiastolicChart = () => {
    const chartStyle = {
      width: '120px',
      height: '50px',
    };
    return (
      <FlexBox flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
        <Typography component='h6' color='text.primary'>
          {t('patientDashboard.Diastolic')}
        </Typography>
        <GaugeChart
          id='gauge-chart2'
          style={chartStyle}
          arcsLength={[75, 80, 85, 90]}
          nrOfLevels={20}
          arcWidth={0.3}
          colors={['#5BE12C', '#137e1b', '#EA4228']}
          percent={90 / (75 + 90)}
          formatTextValue={() => ''}
          textColor={'#161b22'}
        />
        <Typography component='h6' fontWeight={600} color='text.primary'>
          90 mmHg
        </Typography>
      </FlexBox>
    );
  };
  const renderProfileBlock = () => {
    return (
      <Card className={styles.profileCard}>
        <CardHeader
          action={
            <IconButton>
              <Badge color='error' badgeContent={0}>
                <EditIcon sx={{ color: 'text.disabled', fontSize: '1.3rem' }} />
              </Badge>
            </IconButton>
          }
        />
        <CardContent sx={{ padding: '12px 12px 0 12px' }}>
          <Avatar sx={{ width: 80, height: 80 }} className={`${styles.profileAvatar} shadow`} src={'https://i.pravatar.cc/300'} />
          <Typography className={styles.profileHeading} variant='h5' component='h6' color='text.primary'>
            Jillayne Pettus
          </Typography>
          {/* <h3 className={styles.profileHeading}>Alan Podemski</h3> */}
          <Typography component='span' className={styles.profileSubheader}>
            1985 (40 tuổi). Nữ
          </Typography>
          <FlexBox justifyContent='center' className={styles.profileSubheader}>
            <Badge color='error' badgeContent={0}>
              <SmartphoneIcon sx={{ color: 'text.disabled', fontSize: '1.3rem' }} />
            </Badge>
            <Typography variant='subtitle1'>0988.256688</Typography>
          </FlexBox>
        </CardContent>
        <Divider sx={{borderColor: '#f5f5f5'}} />

        <FlexBox justifyContent={'center'}>
          <Box p={2} flex={'auto'} sx={{ width: '102px' }}>
            <Typography component='p' className={styles.profileStatLabel}>
              {t('patientDashboard.Height')}
            </Typography>
            <Typography component='p' className={styles.profileStatValue}>
              170 cm
            </Typography>
          </Box>
          <Divider sx={{borderColor: '#f5f5f5'}} orientation="vertical" flexItem />
          <Box p={2} flex={'auto'} sx={{ width: '102px' }}>
            <Typography component='p' className={styles.profileStatLabel}>
              {t('patientDashboard.Weight')}
            </Typography>
            <Typography component='p' className={styles.profileStatValue}>
              67 kg
            </Typography>
          </Box>
          <Divider sx={{borderColor: '#f5f5f5'}} orientation="vertical" flexItem />

          <Box p={2} flex={'auto'} sx={{ width: '102px' }}>
            <Typography component='p' className={styles.profileStatLabel}>
              {t('patientDashboard.BMI')}
            </Typography>
            <Typography component='p' className={styles.profileStatValue}>
              29.3
            </Typography>
          </Box>
        </FlexBox>
      </Card>
    );
  };
  const renderRemaining = () => {
    return (
      <>
        <FlexBox flexDirection='column' justifyContent={'center'} alignItems={'flex-start'}>
          <FlexBox alignItems={'center'} justifyContent={'flex-start'} gap={'8px'}>
            <Badge color='error' badgeContent={0}>
              <FavoriteOutlinedIcon sx={{ color: 'text.disabled', fontSize: '1.3rem' }} />
            </Badge>
            <Typography component='h6' color='text.primary'>
              {t('patientDashboard.BeatsPerMinus')}
            </Typography>
          </FlexBox>
          <FlexBox alignItems={'center'} justifyContent={'flex-start'} gap={'8px'}>
            <Badge color='error' badgeContent={0}>
              <Typography variant='h5' component='h6' color='text.primary'>
                90
              </Typography>
            </Badge>
            <Typography component='h6' color='text.primary'>
              per m.
            </Typography>
          </FlexBox>
        </FlexBox>
        <FlexBox flexDirection='column' justifyContent={'center'} alignItems={'flex-start'}>
          <FlexBox alignItems={'center'} justifyContent={'flex-start'} gap={'8px'}>
            <Badge color='error' badgeContent={0}>
              <AirIcon sx={{ color: 'text.disabled', fontSize: '1.3rem' }} />
            </Badge>
            <Typography component='h6' color='text.primary'>
              {t('patientDashboard.BreathingPerMinus')}
            </Typography>
          </FlexBox>
          <FlexBox alignItems={'center'} justifyContent={'flex-start'} gap={'8px'}>
            <Badge color='error' badgeContent={0}>
              <Typography variant='h5' component='h6' color='text.primary'>
                30
              </Typography>
            </Badge>
            <Typography component='h6' color='text.primary'>
              per m.
            </Typography>
          </FlexBox>
        </FlexBox>
      </>
    );
  };

  const renderRiskBlock = () => {
    return (
      <Card sx={{ marginBottom: '16px', width: '100%', minHeight: '242px' }}>
        <CardHeader
          action={
            <IconButton aria-label='settings'>
              <MoreVert />
            </IconButton>
          }
          title={t('patientDashboard.risk')}
        />
        <CardContent sx={{ paddingTop: '10px', paddingBottom: '10px !important' }}>
          {/* <Empty /> */}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FlexBox flexWrap={'wrap'} gap={'5px'} alignItems={'center'}>
                <IconButton>
                  <Badge color='error' badgeContent={0}>
                    <LabelIcon sx={{ color: 'text.disabled', fontSize: '1.3rem' }} />
                  </Badge>
                </IconButton>
                <Chip
                  size='small'
                  label='affects diabetes'
                  sx={{ textOverflow: 'ellipsis' }}
                  onDelete={handleDelete}
                  deleteIcon={<DeleteIcon />}
                  variant='outlined'
                />
                <Chip
                  size='small'
                  label='high blood pressure'
                  sx={{ textOverflow: 'ellipsis' }}
                  onDelete={handleDelete}
                  deleteIcon={<DeleteIcon />}
                  variant='outlined'
                />
              </FlexBox>
            </Grid>
            <Grid sx={{ paddingTop: '0px !important' }} item xs={12}>
              <FlexBox flexWrap={'wrap'} gap={'5px'} alignItems={'center'}>
                <IconButton>
                  <Badge color='error' badgeContent={0}>
                    <LabelIcon sx={{ color: 'text.disabled', fontSize: '1.3rem' }} />
                  </Badge>
                </IconButton>
                <Chip
                  size='small'
                  label='smoke'
                  sx={{ textOverflow: 'ellipsis' }}
                  onDelete={handleDelete}
                  deleteIcon={<DeleteIcon />}
                  variant='outlined'
                />
                <Chip
                  size='small'
                  label='drink alcohol'
                  sx={{ textOverflow: 'ellipsis' }}
                  onDelete={handleDelete}
                  deleteIcon={<DeleteIcon />}
                  variant='outlined'
                />
              </FlexBox>
            </Grid>

            <Grid sx={{ paddingTop: '0px !important' }} item xs={12}>
              <FlexBox flexWrap={'wrap'} gap={'5px'} alignItems={'center'}>
                <IconButton>
                  <Badge color='error' badgeContent={0}>
                    <LabelIcon sx={{ color: 'text.disabled', fontSize: '1.3rem' }} />
                  </Badge>
                </IconButton>
                <Chip
                  size='small'
                  label='family cancer syndromes'
                  sx={{ textOverflow: 'ellipsis' }}
                  onDelete={handleDelete}
                  deleteIcon={<DeleteIcon />}
                  variant='outlined'
                />
              </FlexBox>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  };

  const renderSymptomBlock = () => {
    return (
      <Card sx={{ marginBottom: '16px', width: '100%', minHeight: '242px' }}>
        <CardHeader title={t('patientDashboard.symptom')} />
        <CardContent sx={{ paddingTop: '10px', paddingBottom: '10px !important' }}>
          {/* <Empty /> */}
          <Grid container >
            <Grid item xs={12}>
              <Typography component='span' className={styles.profileSubheader}>
                <TextField
                  multiline
                  sx={{ width: '100%' }}
                  size='small'
                  rows={1}
                  defaultValue={'Chóng mặt, hoa mắt, đau vai gáy'}
                  variant='filled'
                />
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography component='h5' variant='h5'>
                {t('patientDashboard.diseaseProgression')}
              </Typography>
              <Typography component='span' className={styles.profileSubheader}>
                <TextField
                  multiline
                  sx={{ width: '100%' }}
                  size='small'
                  rows={1}
                  defaultValue={'Ngày trước có ăn bậy, thức khuya, có uống bia'}
                  variant='filled'
                />
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  };

  const renderDiagnose = () => {
    return (
      <Card sx={{ marginBottom: '16px', width: '100%', minHeight: '300px' }}>
        <CardHeader
          action={
            <IconButton aria-label='settings'>
              <MoreVert />
            </IconButton>
          }
          title={t('patientDashboard.diagnose')}
        />
        <CardContent sx={{ paddingTop: '10px', paddingBottom: '10px !important' }}>
          {/* <Empty /> */}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FlexBox flexWrap={'wrap'} gap={'5px'} alignItems={'center'}>
                <Autocomplete
                  id='size-small-outlined'
                  size='small'
                  sx={{ width: '100%', marginBottom: '10px' }}
                  options={top100Films}
                  getOptionLabel={(option: any) => option.title}
                  renderInput={(params) => <TextField {...params} placeholder='Quick search ICD-10 or Free text' />}
                />

                <Tooltip title='H30-H36 - Disorders of choroid and retina'>
                  <Chip
                    size='small'
                    avatar={<IcdInfoWrapper >H30-H36</IcdInfoWrapper>}
                    label='Disorders of choroid and retina'
                    sx={{ textOverflow: 'ellipsis' }}
                    onDelete={handleDelete}
                    deleteIcon={<DeleteIcon />}
                    variant='outlined'
                  />
                </Tooltip>
                <Tooltip title='E84 - Cystic fibrosis'>
                  <Chip
                    size='small'
                    avatar={<IcdInfoWrapper>E84</IcdInfoWrapper>}
                    label='  Cystic fibrosis'
                    sx={{ textOverflow: 'ellipsis' }}
                    onDelete={handleDelete}
                    deleteIcon={<DeleteIcon />}
                    variant='outlined'
                  />
                </Tooltip>
                <Tooltip title='E75 - Disorders of sphingolipid metabolism and other lipid storage disorders'>
                  <Chip
                    size='small'
                    avatar={<IcdInfoWrapper>E75</IcdInfoWrapper>}
                    label='Disorders of sphingolipid metabolism and other lipid storage disorders'
                    sx={{ textOverflow: 'ellipsis' }}
                    onDelete={handleDelete}
                    deleteIcon={<DeleteIcon />}
                    variant='outlined'
                  />
                </Tooltip>
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
          title={t('patientDashboard.prescription')}
          action={
            <IconButton aria-label='settings'>
              <AddIcon />
            </IconButton>
          }
        />

        <CardContent>
          <PerfectScrollbar
            style={{
              height: '200px',
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Box className={styles.medicalItem}>
                  <Typography variant='h6' color='text.primary'>
                    Aspirin 3mg
                  </Typography>
                  <Typography component='span' className={styles.profileSubheader}>
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
                  <Typography component='span' className={styles.profileSubheader}>
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
                  <Typography component='span' className={styles.profileSubheader}>
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
  const handleDelete = () => {
    return;
  };

  const renderSubclinical = () => {
    return (
      <Card sx={{ marginBottom: '16px', width: '100%', minHeight: '300px' }}>
        <CardContent sx={{ paddingTop: '10px', paddingBottom: '10px !important' }}>
          <TabContext value={tabIndex}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList  onChange={tabIndexChanged} >
                <Tab label={t('patientDashboard.subclinical')} value='1' />
                <Tab label={t('patientDashboard.subclinicalResult')} value='2' />
              </TabList>
            </Box>
            <TabPanel value='1'>Item One</TabPanel>
            <TabPanel value='2'>Item Two</TabPanel>
          </TabContext>
        </CardContent>
      </Card>
    );
  };

  return (
    <React.Fragment>
      <Toolbar sx={{ paddingTop: '10px', paddingBottom: '10px !important' }}>
        <Breadcrumbs aria-label='breadcrumb'>
          <Typography color='text.primary'>Patients</Typography>
          <Typography color='text.success'>[KB2200001192 - Health check service]</Typography>

          <Link underline='hover' color='inherit'>
            <Typography variant='h4' component='h6' color='text.primary'>
              <Badge sx={{ width: '25px' }} badgeContent={'Inprocessing'} color='success'></Badge>
            </Typography>
          </Link>
          <Typography
            sx={{ position: 'absolute', right: 0, bottom: '23px', display: 'flex', alignItems: 'center' }}
            color='text.success'
          >
            <UpdateOutlinedIcon /> Check-in: <b>20/11/2022 10:30am </b>
          </Typography>
        </Breadcrumbs>
      </Toolbar>
      <Grid mb={3} container spacing={2}>
        {/* children inside */}
        <Grid item md={3} lg={3}>
          {renderProfileBlock()}

          {renderPhysicalCondition()}

          {renderAllergies()}
          {renderMedicalHistory()}
        </Grid>

        <Grid item md={9} lg={9}>
          <Grid container spacing={2}>
            <Grid item md={5} lg={5}>
              {renderRiskBlock()}
            </Grid>
            <Grid item md={7} lg={7}>
              {renderSymptomBlock()}
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
