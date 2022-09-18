import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import Apps from '@mui/icons-material/Apps';
import IconButton from '@mui/material/IconButton';
import { useTranslation } from 'react-i18next';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Avatar, Card, CardContent, CardHeader } from '@mui/material';
import { modules } from '@core/constants/moduleConfig';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='down' ref={ref} {...props} />;
});

const Item = styled(CardHeader)(({ theme }) => ({
  padding: '10px',
  border: '1px solid #abd7ff',
  background: '#f1f8ff',
  borderRadius: '22px',
}));

export default function ModuleItem() {
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box sx={{ textAlign: 'center' }}>
        <Button
          sx={{
            width: '90%',
            background: '#f3f4f9',
            padding: '15px 20px',
          }}
          color='secondary'
          variant='contained'
          onClick={handleClickOpen}
        >
          <IconButton sx={{ position: 'absolute', left: '12px' }}>
            <Apps />
          </IconButton>
          {t('common.medicalExamination')}
          <IconButton sx={{ position: 'absolute', right: '12px' }}>
            <UnfoldMoreIcon />
          </IconButton>
        </Button>
      </Box>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle>{t('common.selectModule')}</DialogTitle>
        <DialogContent>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Item
                    avatar={
                      <Avatar >
                        R
                      </Avatar>
                    }
                    title={t(`${modules[0].name}`)}
                    subheader={t(`${modules[0].description}`)}
                  />
                  <Item
                    avatar={
                      <Avatar >
                        R
                      </Avatar>
                    }
                    title={t(`${modules[1].name}`)}
                    subheader={t(`${modules[1].description}`)}
                  />
                 <Item
                    avatar={
                      <Avatar >
                        R
                      </Avatar>
                    }
                    title={t(`${modules[2].name}`)}
                    subheader={t(`${modules[2].description}`)}
                  />
                </Grid>
                <Grid item xs={6}>
                <Item
                    avatar={
                      <Avatar >
                        R
                      </Avatar>
                    }
                    title={t(`${modules[4].name}`)}
                    subheader={t(`${modules[4].description}`)}
                  />
                  <Item
                    avatar={
                      <Avatar >
                        R
                      </Avatar>
                    }
                    title={t(`${modules[5].name}`)}
                    subheader={t(`${modules[5].description}`)}
                  />
                 <Item
                    avatar={
                      <Avatar >
                        R
                      </Avatar>
                    }
                    title={t(`${modules[6].name}`)}
                    subheader={t(`${modules[6].description}`)}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}
