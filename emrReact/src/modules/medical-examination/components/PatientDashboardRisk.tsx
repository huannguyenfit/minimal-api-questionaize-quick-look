import {
  Badge,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  IconButton,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import FlexBox from "@core/components/FlexBox";
import DeleteIcon from "@mui/icons-material/Close";
import { MoreVert } from "@mui/icons-material";
import LabelIcon from "@mui/icons-material/Label";
import { ChipSmall } from "../pages/PatientDashboard";
import React from "react";
import { PatientDashboardRiskForm } from "./PatientDashboardRiskForm";
import Empty from "@core/components/Empty";
type RiskBlockProps = {
  data: any;
};
export const PatientDashboardRisk = ({ data }: RiskBlockProps) => {
  const { t } = useTranslation();
  const [patient, setPatient] = React.useState({ ...data });

  const handleDelete = (item, group) => {
    const newPatient = { ...data };

    switch (group) {
      case 1: {
        newPatient.Risks.Group = newPatient.Risks.Group.filter(
          (o) => o.Id != item.Id
        );
        break;
      }
      case 2: {
        newPatient.Risks.Group1 = newPatient.Risks.Group1.filter(
          (o) => o.Id != item.Id
        );
        break;
      }
      case 3: {
        newPatient.Risks.Group2 = newPatient.Risks.Group2.filter(
          (o) => o.Id != item.Id
        );
        break;
      }
    }
    setPatient(newPatient);
  };
  return (
    <Card sx={{ marginBottom: "16px", width: "100%", minHeight: "242px" }}>
      <CardHeader
        action={<PatientDashboardRiskForm data={data} />}
        title={t("patientDashboard.risk.title")}
      />
      <CardContent
        sx={{ paddingTop: "10px", paddingBottom: "10px !important" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            {data.Risks.Group.length == 0 &&
              data.Risks.Group1.length == 0 &&
              data.Risks.Group2.length == 0 && <Empty />}
          </Grid>
          <Grid item xs={12}>
            <FlexBox flexWrap={"wrap"} gap={"5px"} alignItems={"center"}>
              {data && data.Risks?.Group?.length > 0 && (
                <IconButton>
                  <Badge color='error' badgeContent={0}>
                    <LabelIcon
                      sx={{ color: "text.disabled", fontSize: "1.3rem" }}
                    />
                  </Badge>
                </IconButton>
              )}

              {data &&
                data.Risks.Group?.map((item, index) => {
                  return (
                    <ChipSmall
                      key={`risk1_${index}`}
                      size='small'
                      label={item.Content}
                      sx={{ textOverflow: "ellipsis" }}
                      onDelete={() => handleDelete(item, 1)}
                      deleteIcon={<DeleteIcon />}
                      variant='outlined'
                    />
                  );
                })}
            </FlexBox>
          </Grid>
          <Grid sx={{ paddingTop: "0px !important" }} item xs={12}>
            <FlexBox flexWrap={"wrap"} gap={"5px"} alignItems={"center"}>
              {data && data.Risks?.Group1?.length > 0 && (
                <IconButton>
                  <Badge color='error' badgeContent={0}>
                    <LabelIcon
                      sx={{ color: "text.disabled", fontSize: "1.3rem" }}
                    />
                  </Badge>
                </IconButton>
              )}

              {data &&
                data.Risks.Group1?.map((item, index) => {
                  return (
                    <ChipSmall
                      key={`risk2_${index}`}
                      size='small'
                      label={item.Content}
                      sx={{ textOverflow: "ellipsis" }}
                      onDelete={() => handleDelete(item, 2)}
                      deleteIcon={<DeleteIcon />}
                      variant='outlined'
                    />
                  );
                })}
            </FlexBox>
          </Grid>

          <Grid sx={{ paddingTop: "0px !important" }} item xs={12}>
            <FlexBox flexWrap={"wrap"} gap={"5px"} alignItems={"center"}>
              {data && data.Risks?.Group2?.length > 0 && (
                <IconButton>
                  <Badge color='error' badgeContent={0}>
                    <LabelIcon
                      sx={{ color: "text.disabled", fontSize: "1.3rem" }}
                    />
                  </Badge>
                </IconButton>
              )}
              {data &&
                data.Risks.Group2?.map((item, index) => {
                  return (
                    <ChipSmall
                      key={`risk3_${index}`}
                      size='small'
                      label={item.Content}
                      sx={{ textOverflow: "ellipsis" }}
                      onDelete={() => handleDelete(item, 3)}
                      deleteIcon={<DeleteIcon />}
                      variant='outlined'
                    />
                  );
                })}
            </FlexBox>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
