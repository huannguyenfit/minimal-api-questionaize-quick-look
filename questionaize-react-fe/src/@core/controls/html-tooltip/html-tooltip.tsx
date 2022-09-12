import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

export const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      display:'flex',
      paddingTop:15,
      flexDirection: 'column',
      backgroundColor: '#fff',
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)!important',
      maxWidth: 260,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }));