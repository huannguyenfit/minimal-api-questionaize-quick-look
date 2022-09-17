import FlexBox from "@core/components/FlexBox"
import { Toolbar, Typography, Grid, Breadcrumbs, Link, Card, CardContent, Avatar, Icon, IconButton, Badge, Divider, Chip,  Button, CardHeader } from "@mui/material"
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import React from "react"
import { useTranslation } from "react-i18next"
import { Apps, MoreVert } from "@mui/icons-material";
import EditIcon from '@mui/icons-material/Edit';
import GaugeChart from 'react-gauge-chart'
import AirIcon from '@mui/icons-material/Air';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import DeleteIcon from '@mui/icons-material/Close';
import { Box } from "@mui/system";
import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';


const useStyles = makeStyles({
    profileCard: {
      borderRadius: 12,
      minWidth: 256,
      textAlign: 'center',
    },
    profileAvatar: {
      margin: 'auto',
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
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 4,
      letterSpacing: '1px',
    },
  });
  

export const PatientDashboard = () => {
    const { t } = useTranslation()


    const styles = useStyles();

    const renderSystolicChart = () => {
        const chartStyle = {
            width: '120px',
            height: '50px'
        }   
        return (
            <FlexBox   flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                <Typography component="h6" color="text.primary">{t('patientDashboard.Systolic')}</Typography>
                <GaugeChart id="gauge-chart1"
                    style={chartStyle}
                    nrOfLevels={20}
                    arcWidth={0.3}
                    arcsLength={[110, 120, 130, 140]}
                    colors={['#ffbc31', '#137e1b', '#EA4228']}
                    percent={120 / (110 + 140)}
                    formatTextValue={() => ""}
                />
                <Typography component="h6" fontWeight={600} color="text.primary">120 mmHg</Typography>

            </FlexBox>
        )
    }

    
    const renderRemaining = () => {
        return (
            <FlexBox gap={'8px'} >
                <FlexBox flexDirection="column" justifyContent={'center'} alignItems={'flex-start'}>
                    <FlexBox alignItems={'center'} justifyContent={'flex-start'} gap={'8px'}>
                        <Badge color="error" badgeContent={0}>
                            <FavoriteOutlinedIcon sx={{ color: "text.disabled", fontSize: '1.3rem' }} />
                        </Badge>
                        <Typography component="h6" color="text.primary"> {t('patientDashboard.BeatsPerMinus')}</Typography>

                    </FlexBox>
                    <FlexBox alignItems={'center'} justifyContent={'flex-start'} gap={'8px'}>
                        <Badge color="error" badgeContent={0}>
                            <Typography variant="h5" component="h6" color="text.primary">90</Typography>
                        </Badge>
                        <Typography component="h6" color="text.primary"> per m.</Typography>
                    </FlexBox>
                </FlexBox>
                <Divider sx={{ alignSelf: 'center', height: '70px' }} orientation="vertical" flexItem />
                <FlexBox flexDirection="column" justifyContent={'center'} alignItems={'flex-start'}>
                    <FlexBox alignItems={'center'} justifyContent={'flex-start'} gap={'8px'}>
                        <Badge color="error" badgeContent={0}>
                            <AirIcon sx={{ color: "text.disabled", fontSize: '1.3rem' }} />
                        </Badge>
                        <Typography component="h6" color="text.primary"> {t('patientDashboard.BreathingPerMinus')}</Typography>
                    </FlexBox>
                    <FlexBox alignItems={'center'} justifyContent={'flex-start'} gap={'8px'}>
                        <Badge color="error" badgeContent={0}>
                            <Typography variant="h5" component="h6" color="text.primary">30</Typography>
                        </Badge>
                        <Typography component="h6" color="text.primary"> per m.</Typography>
                    </FlexBox>
                </FlexBox>

                <Divider sx={{ alignSelf: 'center', height: '70px' }} orientation="vertical" flexItem />


                <FlexBox flexDirection="column" justifyContent={'center'} alignItems={'flex-start'}>
                    <FlexBox alignItems={'center'} justifyContent={'flex-start'} gap={'8px'}>
                        {/* <Badge color="error" badgeContent={0}>
                            <FavoriteIcon sx={{ color: "text.disabled", fontSize: '1.3rem' }} />
                        </Badge> */}
                        <Typography component="h6" color="text.primary"> {t('patientDashboard.Height')}</Typography>

                    </FlexBox>
                    <FlexBox alignItems={'center'} justifyContent={'flex-start'} gap={'8px'}>
                        <Badge color="error" badgeContent={0}>
                            <Typography variant="h5" component="h6" color="text.primary">170 </Typography>
                        </Badge>
                        <Typography component="h6" color="text.primary"> cm.</Typography>
                    </FlexBox>
                </FlexBox>


                <Divider sx={{ alignSelf: 'center', height: '70px' }} orientation="vertical" flexItem />


                <FlexBox flexDirection="column" justifyContent={'center'} alignItems={'flex-start'}>
                    <FlexBox alignItems={'center'} justifyContent={'flex-start'} gap={'8px'}>
                        {/* <Badge color="error" badgeContent={0}>
                            <FavoriteIcon sx={{ color: "text.disabled", fontSize: '1.3rem' }} />
                        </Badge> */}
                        <Typography component="h6" color="text.primary"> {t('patientDashboard.Weight')}</Typography>

                    </FlexBox>
                    <FlexBox alignItems={'center'} justifyContent={'flex-start'} gap={'8px'}>
                        <Badge color="error" badgeContent={0}>
                            <Typography variant="h5" component="h6" color="text.primary">60 </Typography>
                        </Badge>
                        <Typography component="h6" color="text.primary"> kg.</Typography>
                    </FlexBox>
                </FlexBox>



            </FlexBox>

        )
    }

    const renderDiastolicChart = () => {
        const chartStyle = {
            width: '120px',
            height: '50px'
        }
        return (

            <FlexBox flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                <Typography component="h6" color="text.primary">{t('patientDashboard.Diastolic')}</Typography>
                <GaugeChart id="gauge-chart2"
                    style={chartStyle}
                    arcsLength={[75, 80, 85, 90]}
                    nrOfLevels={20}
                    arcWidth={0.3}
                    colors={['#5BE12C', '#137e1b', '#EA4228']}
                    percent={(90 / (75 + 90))}
                    formatTextValue={() => ""}
                    textColor={'#161b22'}
                />
                <Typography component="h6" fontWeight={600} color="text.primary">90 mmHg</Typography>

            </FlexBox>
        )
    }

    const renderRiskBlock = () => {
        return (
            <Card sx={{ width: '100%' }}>
                 <CardHeader
                    action={
                        <IconButton aria-label="settings">
                            <MoreVert />
                        </IconButton>
                    }
                    title="Risk"
                    />
            <CardContent sx={{ paddingTop: '10px', paddingBottom: '10px !important' }}>
                {/* <Typography gutterBottom component="div" variant="h5">Risk</Typography> */}
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <FlexBox flexWrap={"wrap"} gap={'5px'} alignItems={'center'}>
                            <IconButton >
                                <Badge color="error" badgeContent={0}>
                                    <LabelOutlinedIcon sx={{ color: "text.disabled", fontSize: '1.3rem' }} />
                                </Badge>
                            </IconButton>
                            <Chip size="small" label="affects diabetes" sx={{ textOverflow: 'ellipsis' }} onDelete={handleDelete}  deleteIcon={<DeleteIcon />} variant="outlined" />
                            <Chip size="small" label="high blood pressure" sx={{ textOverflow: 'ellipsis' }}  onDelete={handleDelete} deleteIcon={<DeleteIcon />} variant="outlined" />
                            <Chip size="small" label="effects of stroke" sx={{ textOverflow: 'ellipsis' }}  onDelete={handleDelete} deleteIcon={<DeleteIcon />} variant="outlined" />

                        </FlexBox>
                    </Grid>

                    <Grid sx={{ paddingTop: '0px !important' }} item xs={12}>
                        <FlexBox flexWrap={"wrap"} gap={'5px'} alignItems={'center'}>
                            <IconButton >
                                <Badge color="error" badgeContent={0}>
                                    <LabelOutlinedIcon sx={{ color: "text.disabled", fontSize: '1.3rem' }} />
                                </Badge>
                            </IconButton>
                            <Chip size="small" label="smoke" sx={{ textOverflow: 'ellipsis' }}  onDelete={handleDelete} deleteIcon={<DeleteIcon />} variant="outlined" />
                            <Chip size="small" label="drink alcohol" sx={{ textOverflow: 'ellipsis' }} onDelete={handleDelete}  deleteIcon={<DeleteIcon />}  variant="outlined" />
                        </FlexBox>
                    </Grid>

                    <Grid sx={{ paddingTop: '0px !important' }} item xs={12}>
                        <FlexBox flexWrap={"wrap"} gap={'5px'} alignItems={'center'}>
                            <IconButton >
                                <Badge color="error" badgeContent={0}>
                                    <LabelOutlinedIcon sx={{ color: "text.disabled", fontSize: '1.3rem' }} />
                                </Badge>
                            </IconButton>
                            <Chip size="small" label="family cancer syndromes" sx={{ textOverflow: 'ellipsis' }}  onDelete={handleDelete} deleteIcon={<DeleteIcon />} variant="outlined" />
                        </FlexBox>
                    </Grid>

                </Grid>

            </CardContent>
        </Card>
        )
    }

    const handleDelete = () => {
        return;
    }
    return (
        <React.Fragment>

            <Toolbar sx={{paddingTop: '10px', paddingBottom: '10px !important'}}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Typography color="text.primary">Patients</Typography>
                    <Typography variant="h4" component="h6" color="text.primary">KB2200001192</Typography>
                    {/* <Link underline="hover" color="inherit" href="/">
                        {moment(new Date()).format('DD/MM/YYY hh:mm')}
                    </Link> */}
                    { /*
                    <Typography color="text.primary">Breadcrumbs</Typography> */}
                </Breadcrumbs>
            </Toolbar>
            <Grid mb={3} container spacing={2}>
                {/* children inside */}
                <Grid item md={3} lg={3}>
                    <Card className={styles.profileCard}>
                        <CardContent>
                            <Avatar className={styles.profileAvatar} src={'https://i.pravatar.cc/300'} />
                            <h3 className={styles.profileHeading}>Alan Podemski</h3>
                            <span className={styles.profileSubheader}>Poland</span>
                        </CardContent>
                        <Divider light />
                        <FlexBox display={'flex'}>
                            <Box p={2} flex={'auto'} >
                            <p className={styles.profileStatLabel}>Followers</p>
                            <p className={styles.profileStatValue}>6941</p>
                            </Box>
                            <Box p={2} flex={'auto'} >
                            <p className={styles.profileStatLabel}>Following</p>
                            <p className={styles.profileStatValue}>12</p>
                            </Box>
                        </FlexBox>
                    </Card>
                    {/* <Card sx={{ width: '100%' }}>
                        <CardContent sx={{ paddingTop: '10px', paddingBottom: '10px !important' }}>
                            <Grid container spacing={2}>
                                <Grid item md={4} >
                                    <FlexBox position={'relative'} alignItems={'center'}>
                                        <Avatar
                                            src={`https://i.pravatar.cc/150?img=48`}
                                            sx={{ mr: 2, width: '80px', height: '80px' }}
                                        />
                                        <FlexBox flexDirection="column" sx={{ width: '100%' }}>
                                            <FlexBox alignItems={"center"}>
                                                <Typography variant="h5" component="h6" color="text.primary">Jillayne Pettus</Typography>
                                                <IconButton >
                                                    <Badge color="error" badgeContent={0}>
                                                        <EditIcon sx={{ color: "text.disabled", fontSize: '1.3rem' }} />
                                                    </Badge>
                                                </IconButton>
                                            </FlexBox>

                                            <Typography variant="subtitle1" >
                                                <Badge color="secondary" badgeContent={'Nữ'} >
                                                </Badge>  10/03/1985 (40 tuổi).
                                            </Typography>
                                            <FlexBox alignItems={"center"}>
                                                <Badge color="error" badgeContent={0}>
                                                    <SmartphoneIcon sx={{ color: "text.disabled", fontSize: '1.3rem' }} />
                                                </Badge>
                                                <Typography variant="subtitle1" >
                                                    0988.256688
                                                </Typography>
                                            </FlexBox>
                                        </FlexBox>


                                    </FlexBox>
                                </Grid>

                               <Grid position={'relative'} display={'flex'} alignItems={'center'} item md={8} >
                                    <FlexBox gap={'8px'} justifyContent={'space-between'}>
                                        <Divider sx={{ alignSelf: 'center', height: '70px' }} orientation="vertical" flexItem />
                                        {renderSystolicChart()}
                                        {renderDiastolicChart()}
                                        <Divider sx={{ alignSelf: 'center', height: '70px' }} orientation="vertical" flexItem />
                                        {renderRemaining()}
                                    </FlexBox>
                                </Grid> 

                            </Grid>

                        </CardContent>
                    </Card> */}
                </Grid>

                <Grid item md={9} lg={9}></Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item md={4} lg={4}>
                {renderRiskBlock()}
                </Grid>
            </Grid>

        </React.Fragment>
    )


}