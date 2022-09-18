import Box, { BoxProps } from "@mui/material/Box";
import logoSvg from 'assets/svg/logo.svg';

type LogoProps = {
  colored?: boolean;
  size?: number;
} & BoxProps;
const Logo = ({ colored = false, size = 40, ...boxProps }: LogoProps) => {
  return (
    <Box {...boxProps}>
      <img src={logoSvg} alt='' />
    </Box>
  );
};

export default Logo;
