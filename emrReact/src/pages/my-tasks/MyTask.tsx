
import React, { useState, useEffect } from 'react';
import { patients } from './patientsData';
import { HtmlTooltip } from '@core/components/HtmlTooltip';
import { Avatar, Box, Card, CardContent, Grid, IconButton, Skeleton, Toolbar, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { useTranslation } from 'react-i18next';
import Empty from '@core/components/Empty';
export const MyTasks = () => {
  const [results, setResults] = useState([...patients]);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation()
  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    },
      1500)
  }, [])


  const renderCardItem = (item: any, index: number) => {
    return (
      <HtmlTooltip key={`tooltip_${index}`}
        placement="right"
        title={
          <Grid container sx={{ width: '250px' }} spacing={2}>
            <Grid item md={4}>
              <Typography variant="body2" color="textSecondary" component="div">
                Huyết áp
              </Typography>
              <Typography component="div" variant="h6">
                55
              </Typography>
            </Grid>
            <Grid item md={4}>
              <Typography variant="body2" color="textSecondary" component="div">
                Mạch
              </Typography>
              <Typography component="div" variant="h6">
                66
              </Typography>
            </Grid>
            <Grid item md={4}>
              <Typography variant="body2" color="textSecondary" component="div">
                Cân nặng
              </Typography>
              <Typography component="div" variant="h6">
                676
              </Typography>
            </Grid>
            <Grid item md={12}>
              <Typography variant="body2" color="textSecondary" component="div">
                Tiền căng/Bệnh sử/Chẩn đoán trước
              </Typography>
              <Typography component="div" variant="h6">
                Từng điều trị tim
              </Typography>
            </Grid>
          </Grid>
        }>
        <Card  sx={{ cursor: 'pointer', marginBottom: "6px", bgcolor: '#f3f3f3', border: '1px solid #e1e1e1' }}>
          <CardContent sx={{ display: "flex", alignItems: "center", paddingBottom: '10px !important', paddingTop: '10px' }}>
            <Avatar
              src={`https://i.pravatar.cc/150?img=${index + 1}`}
              sx={{ mr: 2 }}
            />
            <Box >
              <Typography component="div" variant="h6">
                {item.FullName}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="div">
                10/03/1985 (40 tuổi). Nữ
              </Typography>
              <Box sx={{ display: 'flex', alignItems: "center", gap: '5px' }}>
                <Typography variant="body2" color="textSecondary" component="div">
                  Lý do khám:
                </Typography>
                <Typography variant="h6" component="div">
                  {item.Symptom}
                </Typography>
              </Box>
            </Box>
            <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
              <Typography component="div" variant="h6">
                Giờ vào
              </Typography>
              <Typography variant="body2" color="textSecondary" component="div">
                {new Date().toLocaleDateString()}
              </Typography>
            </Box>
            <IconButton>
              <ChevronRightIcon />
            </IconButton>
          </CardContent>
        </Card>
      </HtmlTooltip>
    )
  }

  return (
    <React.Fragment>
      <Toolbar >
        <Typography variant="h2" component="h4">
          {t('myTask.title')}
        </Typography>
      </Toolbar>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <Card >
            <CardContent >
              <Typography gutterBottom component="div" variant="h5">
                {t('myTask.patientAwaitingLabel')}
              </Typography>
              <PerfectScrollbar style={{
                height: '660px'
              }}>
                {
                  !loading ? (
                    <>
                      {[1, 2, 3, 4, 5, 6].map((text, index) => (
                        <Skeleton key={`Skeleton_${index}`} sx={{ height: 100, borderRadius: '6px', marginBottom: "5px" }} animation="wave" variant="rectangular" />
                      ))}</>
                  ) : <>
                    {results.length ? (
                      <>
                        {results.slice(0, 8).map((item: any, index: number) => {
                          return (
                            renderCardItem(item, index)
                          )
                        }
                        )}
                      </>
                    ) : (
                      <Empty />
                    )}
                  </>}
              </PerfectScrollbar>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment >
  );
};
