import SvgContainer from "@core/components/SvgContainer";
import { Box, Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import { Link as RouterLink } from "react-router-dom";
import { ReactComponent as ForbiddenSvg } from "assets/svg/403.svg";

export const Forbidden = () => {
  const { t } = useTranslation();
  return (
    <Container maxWidth={'xs'}>
      <Box sx={{ textAlign: "center", px: 3, py: 8 }}>
        <SvgContainer>
        <Box marginBottom={3}><ForbiddenSvg /></Box>
        </SvgContainer>
        <Typography gutterBottom variant="h5">
          {t('common.Forbidden')}
        </Typography>
        <Typography variant="body2">
          {t('common.ForbiddenDescription')}
        </Typography>
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Button
            color="secondary"
            component={RouterLink}
            to={`/`}
            variant="contained"
          >
            {t("common.backHome")}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};


