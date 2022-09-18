import { Grid, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const MedicalExamination = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Toolbar>
        <Typography variant='h2' component='h4'>
          {t('medicalExamination.title')}
        </Typography>
      </Toolbar>
      <Grid container spacing={2}>
        {/* children inside */}
        <Grid item md={12}></Grid>
      </Grid>
    </React.Fragment>
  );
};
