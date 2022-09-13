import Box, { BoxProps } from "@mui/material/Box";
type LogoProps = {
  colored?: boolean;
  size?: number;
} & BoxProps;

const Logo = ({ colored = false, size = 40, ...boxProps }: LogoProps) => {
  return (
    <Box {...boxProps}>
      <img src='vendors/images/deskapp-logo.svg' alt='' />
    </Box>
  );
};

export default Logo;
