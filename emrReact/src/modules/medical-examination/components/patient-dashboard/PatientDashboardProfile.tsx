import FlexBox from "@core/components/FlexBox";
import {
  Typography,
  Card,
  CardContent,
  Avatar,
  IconButton,
  Badge,
  Divider,
  CardHeader,
  Box,
  Slider,
} from "@mui/material";

import SmartphoneIcon from "@mui/icons-material/Smartphone";
import EditIcon from "@mui/icons-material/Edit";
import { useTranslation } from "react-i18next";
import GaugeChart from 'react-gauge-chart';
import AirIcon from '@mui/icons-material/Air';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { PatientInfoForm } from "modules/shared/components/PatientInfo";
import { PatientDashboardProfileForm } from "./PatientDashboardProfileForm";
import { usePatientDashboardStyles } from "modules/medical-examination/pages/PatientDashboard";

type PatientBlockProps = {
  data: any;
};

export const PatientDashboardProfile = ({ data }: PatientBlockProps) => {
  const { t } = useTranslation();
  const styles = usePatientDashboardStyles();


  const renderSystolicChart = () => {
    const chartStyle = {
      width: '120px',
      height: '50px',
    };
    return (
      <FlexBox flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
        <Typography component='span' className={styles.profileStatLabel} color='text.primary'>
          {t('patientDashboard.Systolic')}
        </Typography>
        <GaugeChart
          id='gauge-chart1'
          style={chartStyle}
          nrOfLevels={20}
          arcWidth={0.3}
          arcsLength={[110, 120, 130, 140]}
          colors={['#ffbc31', '#137e1b', '#EA4228']}
         percent={data?.PhysicalCondition.Systolic / (110 + 140)}
          formatTextValue={() => ''}
        />
        <Typography component='span' className={styles.profileStatValue} fontWeight={600} color='text.primary'>
          {data?.PhysicalCondition.Systolic} mmHg
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
        <Typography component='span' className={styles.profileStatLabel}  color='text.primary'>
          {t('patientDashboard.Diastolic')}
        </Typography>
        <GaugeChart
          id='gauge-chart2'
          style={chartStyle}
          arcsLength={[75, 80, 85, 90]}
          nrOfLevels={20}
          arcWidth={0.3}
          colors={['#5BE12C', '#137e1b', '#EA4228']}
          percent={data?.PhysicalCondition.Diastolic / (75 + 90)}
          formatTextValue={() => ''}
          textColor={'#161b22'}
        />
        <Typography component='span' className={styles.profileStatValue}  fontWeight={600} color='text.primary'>
          {data?.PhysicalCondition.Diastolic} mmHg
        </Typography>
      </FlexBox>
    );
  };
 
  const renderRemaining = () => {
    return (
      <>
        <FlexBox flexDirection='column' justifyContent={'center'} alignItems={'flex-start'}>
          <FlexBox alignItems={'center'} justifyContent={'flex-start'} gap={'8px'}>
            <Badge color='error' badgeContent={0}>
              <FavoriteBorderIcon sx={{ color: 'text.disabled', fontSize: '1.3rem' }} />
            </Badge>
            <Typography component='span' className={styles.profileStatLabel}  color='text.primary'>
              {t('patientDashboard.BeatsPerMinus')}
            </Typography>
          </FlexBox>
          <FlexBox alignItems={'center'} justifyContent={'flex-start'} gap={'8px'}>
            <Badge color='error' badgeContent={0}>
              <Typography component='span' className={styles.profileStatValue}  color='text.primary'>
                {data?.PhysicalCondition.Pulse}
              </Typography>
            </Badge>
            <Typography component='span' className={styles.profileStatValue}  color='text.primary'>
              per m.
            </Typography>
          </FlexBox>
        </FlexBox>
        <FlexBox flexDirection='column' justifyContent={'center'} alignItems={'flex-start'}>
          <FlexBox alignItems={'center'} justifyContent={'flex-start'} gap={'8px'}>
            <Badge color='error' badgeContent={0}>
              <AirIcon sx={{ color: 'text.disabled', fontSize: '1.3rem' }} />
            </Badge>
            <Typography component='span' className={styles.profileStatLabel}  color='text.primary'>
              {t('patientDashboard.BreathingPerMinus')}
            </Typography>
          </FlexBox>
          <FlexBox alignItems={'center'} justifyContent={'flex-start'} gap={'8px'}>
            <Badge color='error' badgeContent={0}>
              <Typography component='span' className={styles.profileStatValue} color='text.primary'>
              {data?.PhysicalCondition.Breath}
              </Typography>
            </Badge>
            <Typography component='span' className={styles.profileStatValue}  color='text.primary'>
              per m.
            </Typography>
          </FlexBox>
        </FlexBox>
      </>
    );
  };

  return (
    <>
      <Card className={styles.profileCard}>
        <CardHeader
          action={
            <PatientInfoForm data={data}/>
            // <IconButton>
            //   <Badge color='error' badgeContent={0}>
            //     <EditIcon sx={{ color: "text.disabled", fontSize: "1.3rem" }} />
            //   </Badge>
            // </IconButton>
          }
        />
        <CardContent sx={{ padding: "12px 12px 0 12px" }}>
          <Avatar
            sx={{ width: 80, height: 80 }}
            className={`${styles.profileAvatar} shadow`}
            src={"https://i.pravatar.cc/300?img=26"}
          />
          <Typography
            className={styles.profileHeading}
            variant='h5'
            component='h6'
            color='text.primary'
          >
            {data?.FullName}
          </Typography>
          {/* <h3 className={styles.profileHeading}>Alan Podemski</h3> */}
          <Typography component='span' className={styles.profileSubheader}>
            {data?.DOB} ({data?.Age}). {data?.Gender}
          </Typography>
          <FlexBox justifyContent='center' className={styles.profileSubheader}>
            <Badge color='error' badgeContent={0}>
              <SmartphoneIcon
                sx={{ color: "text.disabled", fontSize: "1.3rem" }}
              />
            </Badge>
            <Typography component='span'  className={styles.profileSubheader}>{data?.Phone} </Typography>
          </FlexBox>
        </CardContent>
        <Divider sx={{ borderColor: "#f5f5f5" }} />

        <FlexBox justifyContent={"center"}>
          <Box p={2} flex={"auto"} sx={{ width: "102px" }}>
            <Typography component='p' className={styles.profileStatLabel}>
              {t("patientDashboard.Height")}
            </Typography>
            <Typography component='p' className={styles.profileStatValue}>
              {data?.PhysicalCondition?.Height}
            </Typography>
          </Box>
          <Divider
            sx={{ borderColor: "#f5f5f5" }}
            orientation='vertical'
            flexItem
          />
          <Box p={2} flex={"auto"} sx={{ width: "102px" }}>
            <Typography component='p' className={styles.profileStatLabel}>
              {t("patientDashboard.Weight")}
            </Typography>
            <Typography component='p' className={styles.profileStatValue}>
              {data?.PhysicalCondition?.Weight}
            </Typography>
          </Box>
          <Divider
            sx={{ borderColor: "#f5f5f5" }}
            orientation='vertical'
            flexItem
          />

          <Box p={2} flex={"auto"} sx={{ width: "102px" }}>
            <Typography component='p' className={styles.profileStatLabel}>
              {t("patientDashboard.BMI")}
            </Typography>
            <Typography component='p' className={styles.profileStatValue}>
              {data?.PhysicalCondition?.BMI}
            </Typography>
          </Box>
        </FlexBox>
      </Card>
      <Card sx={{ marginBottom: "16px" }}>
        <CardHeader
          title={t("patientDashboard.physicalCondition.title")}
          action={
           <PatientDashboardProfileForm data={data}/>
          }
        />
        <CardContent sx={{ padding: "12px 12px 0 12px" }}>
          <FlexBox flexDirection={"column"} alignItems={"center"} gap={"10px"}>
            <FlexBox gap={"44px"}>
              {renderSystolicChart()}
              {renderDiastolicChart()}
            </FlexBox>
            <Divider />
            <FlexBox gap={"84px"}>{renderRemaining()}</FlexBox>
            <FlexBox
              sx={{ width: "72%" }}
              flexDirection={"column"}
              gap={"10px"}
            >
              <Slider
                aria-label='SpO2'
                defaultValue= {data?.PhysicalCondition?.SpO2}
                valueLabelDisplay='auto'
                step={10}
                marks
                min={10}
                max={110}
              />
              <Slider
                aria-label='Temp'
                defaultValue={data?.PhysicalCondition?.Temperature}
                valueLabelDisplay='auto'
                step={10}
                marks
                min={10}
                max={110}
              />
            </FlexBox>
          </FlexBox>
        </CardContent>
      </Card>
    </>
  );
};
