import { Box } from "@mui/material";
import { ReactComponent as EmptySvg } from "assets/svg/empty.svg";
import SvgContainer from "./SvgContainer";


const Empty = () => {
  return (
    <SvgContainer>
      <Box marginBottom={3}><EmptySvg /></Box>
    </SvgContainer>
  )
};

export default Empty;
