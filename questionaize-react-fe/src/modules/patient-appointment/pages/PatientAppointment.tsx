import CalendarApp from "@core/components/calendar/CalendarApp"
import { Box, Card, Grid, Toolbar, Typography } from "@mui/material"
import React from "react"
import { useTranslation } from "react-i18next"

export const PatientAppointment = () => {
    const { t } = useTranslation()


    return (
        <React.Fragment>
            <Toolbar >
                <Typography variant="h2" component="h4">
                    {t('patientAppointment.title')}
                </Typography>
            </Toolbar>
            <Grid container spacing="2">
                <Grid item md={12} >
                    <Card>
                        <CalendarApp
                            contentHeight={680}
                            events={[]}
                            onEventClick={null}
                        />
                    </Card>
                </Grid>
            </Grid>

        </React.Fragment>
    )
}