import { Box, Typography } from '@mui/material';
import { ReactComponent as EmptySvg } from 'assets/svg/nothing-icon.svg';
import { useTranslation } from 'react-i18next';
import SvgContainer from './SvgContainer';

const Empty = () => {
  const { t } = useTranslation();
  return (
    <SvgContainer sx={{ width: '140px', margin: '0 auto' }}>
      <Box marginBottom={3}>
        <EmptySvg />
      </Box>
      <Typography component='p'>{t('common.nothing')}</Typography>
    </SvgContainer>
  );
};

export default Empty;
