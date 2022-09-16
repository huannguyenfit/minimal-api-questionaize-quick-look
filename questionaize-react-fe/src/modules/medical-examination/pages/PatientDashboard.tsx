import FlexBox from "@core/components/FlexBox"
import { Toolbar, Typography, Grid, Breadcrumbs, Link, Card, CardContent, Avatar, Icon, IconButton, Badge, Divider, Box,  Button } from "@mui/material"
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import ChipDelete from '@mui/joy/ChipDelete';
import Chip from '@mui/joy/Chip';

import React from "react"
import { useTranslation } from "react-i18next"
import { Apps } from "@mui/icons-material";
import EditIcon from '@mui/icons-material/Edit';
import GaugeChart from 'react-gauge-chart'
import AirIcon from '@mui/icons-material/Air';
import LabelIcon from '@mui/icons-material/Label';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import authService from "@core/services/authService";

export const PatientDashboard = () => {
    const { t } = useTranslation()


    const test = () => {
        authService.test({});
    }

    const renderSystolicChart = () => {
        const chartStyle = {
            width: '120px',
            height: '50px'
        }
        return (
            <FlexBox  flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
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


    // const renderBeatPerMinutesChart = () => {
    //     const chartStyle = {
    //         width: '120px',
    //         height: '50px'
    //     }
    //     return (
    //         <FlexBox flexDirection="column" justifyContent={'center'} alignItems={'flex-start'}>
    //             <FlexBox alignItems={'center'} justifyContent={'flex-start'} gap={'8px'}>
    //                 <Badge color="error" badgeContent={0}>
    //                     <FavoriteIcon sx={{ color: "text.disabled", fontSize: '1.3rem' }} />
    //                 </Badge>
    //                 <Typography component="h6" color="text.primary"> {t('patientDashboard.BeatsPerMinus')}</Typography>

    //             </FlexBox>
    //             <FlexBox alignItems={'center'} justifyContent={'flex-start'} gap={'8px'}>
    //                 <Badge color="error" badgeContent={0}>
    //                     <Typography variant="h5" component="h6" color="text.primary">90</Typography>
    //                 </Badge>
    //                 <Typography component="h6" color="text.primary"> per m.</Typography>
    //             </FlexBox>
    //         </FlexBox>
    //     )
    // }

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

    return (
        <React.Fragment>

            <Toolbar >
                <Breadcrumbs aria-label="breadcrumb">
                    <Typography color="text.primary">Patients</Typography>
                    <Typography variant="h4" component="h6" color="text.primary">Jillayne Pettus</Typography>
                    {/* <Link underline="hover" color="inherit" href="/">
                        {moment(new Date()).format('DD/MM/YYY hh:mm')}
                    </Link> */}
                    { /*
                    <Typography color="text.primary">Breadcrumbs</Typography> */}
                </Breadcrumbs>
            </Toolbar>
            <Grid mb={3} container spacing={2}>
                {/* children inside */}
                <Grid item md={9} lg={9}>
                    <Card sx={{ width: '100%' }}>
                        <CardContent sx={{ paddingTop: '10px', paddingBottom: '10px !important' }}>
                            {/* <Typography gutterBottom component="div" variant="h5">
                                    {t('myTask.patientAwaitingLabel')}
                                </Typography> */}
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
                                                10/03/1985 (40 tuổi). Nữ
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
                                        {/* {renderBreathingPerMinutes()} */}
                                    </FlexBox>
                                </Grid>

                            </Grid>

                        </CardContent>
                    </Card>
                </Grid>

                <Grid item md={3} lg={3}></Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item md={4} lg={4}>
                    <Card sx={{ width: '100%' }}>
                        <CardContent sx={{ paddingTop: '10px', paddingBottom: '10px !important' }}>
                            <Typography gutterBottom component="div" variant="h5">Risk</Typography>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <FlexBox flexWrap={"wrap"} gap={'5px'} alignItems={'center'}>
                                        <IconButton >
                                            <Badge color="error" badgeContent={0}>
                                                <LabelOutlinedIcon sx={{ color: "text.disabled", fontSize: '1.3rem' }} />
                                            </Badge>
                                        </IconButton>
                                        <Chip size="sm" label="affects diabetes" sx={{ textOverflow: 'ellipsis' }} endDecorator={<ChipDelete variant="plain" />} variant="outlined" />
                                        <Chip size="sm" label="high blood pressure" sx={{ textOverflow: 'ellipsis' }} endDecorator={<ChipDelete variant="plain" />} variant="outlined" />
                                        <Chip size="sm" label="effects of stroke" sx={{ textOverflow: 'ellipsis' }} endDecorator={<ChipDelete variant="plain" />} variant="outlined" />

                                    </FlexBox>
                                </Grid>

                                <Grid sx={{ paddingTop: '0px !important' }} item xs={12}>
                                    <FlexBox flexWrap={"wrap"} gap={'5px'} alignItems={'center'}>
                                        <IconButton >
                                            <Badge color="error" badgeContent={0}>
                                                <LabelOutlinedIcon sx={{ color: "text.disabled", fontSize: '1.3rem' }} />
                                            </Badge>
                                        </IconButton>
                                        <Chip size="sm" label="smoke" sx={{ textOverflow: 'ellipsis' }} endDecorator={<ChipDelete variant="plain" />} variant="outlined" />
                                        <Chip size="sm" label="drink alcohol" sx={{ textOverflow: 'ellipsis' }} endDecorator={<ChipDelete variant="plain" />}  variant="outlined" />
                                    </FlexBox>
                                </Grid>

                                <Grid sx={{ paddingTop: '0px !important' }} item xs={12}>
                                    <FlexBox flexWrap={"wrap"} gap={'5px'} alignItems={'center'}>
                                        <IconButton >
                                            <Badge color="error" badgeContent={0}>
                                                <LabelOutlinedIcon sx={{ color: "text.disabled", fontSize: '1.3rem' }} />
                                            </Badge>
                                        </IconButton>
                                        <Chip size="sm" label="ffamily cancer syndromes" sx={{ textOverflow: 'ellipsis' }} endDecorator={<ChipDelete variant="plain" />} variant="outlined" />
                                    </FlexBox>
                                </Grid>

                            </Grid>

                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

        </React.Fragment>
    )


}