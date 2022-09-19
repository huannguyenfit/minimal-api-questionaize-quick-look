import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import Apps from "@mui/icons-material/Apps";
import IconButton from "@mui/material/IconButton";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import Draggable from "react-draggable";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { modules } from "@core/constants/ModuleConfig";
import Paper, { PaperProps } from "@mui/material/Paper";
import { Transition } from "@core/components/features/Transition";
import moduleService, { MODULE_KEY } from "@core/services/moduleService";
import { toggleLoading } from "@core/components/loading/Loading";
import { TDModuleEnum } from "@core/models/enums/moduleEnums";
import localStorageService from "@core/services/localStorageService";



const DraggableComponent = (props: PaperProps) => {
  return (
    <Draggable
      handle='#draggable-dialog-title'
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
};

const Item = styled(CardHeader)(({ theme }) => ({
  padding: "20px",
  border: "1px solid #ebf0f9",
  flexDirection: "column",
  gap: "16px",
  background: "#f8faff",
  borderRadius: "22px",
  cursor: "pointer",
  "&:hover": {
    border: "1px solid #0068b2 !important",
    ".MuiSvgIcon-root": {
      fill: "#0068b2",
    },
  },
  "& .MuiCardHeader-avatar": {
    marginRight: 0,
  },
}));

const ModuleLogo = styled(Avatar)(({ theme }) => ({
  width: "70px",
  height: "70px",
  borderRadius: "15px",
  background: "transparent",
  "& .MuiSvgIcon-root": {
    width: "2.3em",
    height: "2.3em",
  },
}));

export default function ModuleItem() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const [moduleName, setModuleName] = useState<string>('');


  useEffect(() => {
    const getCurrentModule = modules.filter(o => o.id == (localStorageService.get(MODULE_KEY) || TDModuleEnum.MedicalExamination))[0]
    setModuleName(t(`${getCurrentModule.name}`))
  }, [])
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const switchModule = (module) => {
    toggleLoading(true);
    setTimeout(() => {
      setModuleName(t(`${module.name}`))
      moduleService.setModule(module.id)
      toggleLoading(false);
      setOpen(false);
    }, 1000)
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box sx={{ textAlign: "center" }}>
        <Button
          sx={{
            width: "90%",
            background: "#f3f4f9",
            padding: "15px 20px",
          }}
          color='secondary'
          variant='contained'
          onClick={handleClickOpen}
        >
          <Apps sx={{ position: "absolute", left: "12px" }} />
          {moduleName}
          <UnfoldMoreIcon sx={{ position: "absolute", right: "12px" }} />
        </Button>
      </Box>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        fullWidth={true}
        fullScreen={fullScreen}
        onClose={handleClose}
        // PaperComponent={DraggableComponent}
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle display={'flex'} flexDirection={'column'}>
          {t("common.selectModule")}
          <Typography
            component='span'
            sx={{
              fontSize: '14px !important',
              color: "#607D8B",
              marginBottom: "0.875em",
            }}
          >
            The program interface will adjust for your workplace
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Card>
            <CardContent>
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={6}
                  display={"flex"}
                  flexDirection={"column"}
                  gap={"10px"}
                >
                  <Item onClick={() => switchModule(modules[0])}
                    avatar={<ModuleLogo>{modules[0].icon}</ModuleLogo>}
                    title={t(`${modules[0].name}`)}
                    subheader={t(`${modules[0].description}`)}
                  />
                  <Item onClick={() => switchModule(modules[1])}
                    avatar={<ModuleLogo>{modules[1].icon}</ModuleLogo>}
                    title={t(`${modules[1].name}`)}
                    subheader={t(`${modules[1].description}`)}
                  />
                  <Item onClick={() => switchModule(modules[2])}
                    avatar={<ModuleLogo>{modules[2].icon}</ModuleLogo>}
                    title={t(`${modules[2].name}`)}
                    subheader={t(`${modules[2].description}`)}
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                  display={"flex"}
                  flexDirection={"column"}
                  gap={"10px"}
                >
                  <Item onClick={() => switchModule(modules[3])}
                    avatar={<ModuleLogo>{modules[3].icon}</ModuleLogo>}
                    title={t(`${modules[3].name}`)}
                    subheader={t(`${modules[3].description}`)}
                  />
                  <Item
                    onClick={() => switchModule(modules[4])}
                    avatar={<ModuleLogo>{modules[4].icon}</ModuleLogo>}
                    title={t(`${modules[4].name}`)}
                    subheader={t(`${modules[4].description}`)}
                  />
                  <Item
                    onClick={() => switchModule(modules[5])}
                    avatar={<ModuleLogo>{modules[5].icon}</ModuleLogo>}
                    title={t(`${modules[5].name}`)}
                    subheader={t(`${modules[5].description}`)}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>
    </div>
  );
}
