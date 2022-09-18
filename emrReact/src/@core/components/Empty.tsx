import { Box, Typography } from "@mui/material";
import { ReactComponent as EmptySvg } from "assets/svg/nothing-icon.svg";
import { useTranslation } from "react-i18next";
import FlexBox from "./FlexBox";
import SvgContainer from "./SvgContainer";

const Empty = () => {
  const { t } = useTranslation();
  return (
    <SvgContainer sx={{ width: "140px", margin: "0 auto" }}>
      <FlexBox marginBottom={'5px'} >
        <EmptySvg />
      </FlexBox>
      <Typography component='p' sx={{ textAlign: "center", fontSize: '0.9rem' }}>
        {t("common.nothing")}
      </Typography>
    </SvgContainer>
  );
};

export default Empty;
