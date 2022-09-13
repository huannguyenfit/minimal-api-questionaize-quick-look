import Card from "@mui/material/Card";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ConfirmDialog from "@core/components/ConfirmDialog";
import Calendar from "@core/components/calendar/Calendar";
import { Event } from "@core/models/appoinment/appoinment";
import { Toolbar } from '@mui/material';

export const Appoinment = () => {
    const { t } = useTranslation();

    useState<string | undefined>(undefined);
    const [eventUpdated, setEventUpdated] =
        useState<Event | undefined>(undefined);
    const [openConfirmDeleteDialog, setOpenConfirmDeleteDialog] = useState(false);
    const [openEventDialog, setOpenEventDialog] = useState(false);


    const handleCloseConfirmDeleteDialog = () => {
        setOpenConfirmDeleteDialog(false);
    };

    const handleOpenEventDialog = (event?: Event) => {
        setEventUpdated(event);
        setOpenEventDialog(true);
    };

    return (
        <React.Fragment>
            <Toolbar />

            <Card>
                <Calendar
                    contentHeight={720}
                    events={[]}
                    
                    onEventClick={handleOpenEventDialog}
                />
            </Card>
            <ConfirmDialog
                description={t("calendar.confirmations.delete")}
                onClose={handleCloseConfirmDeleteDialog}
                open={openConfirmDeleteDialog}
                title={t("common.confirmation")}
                pending={null}
                onConfirm={null}
            />

        </React.Fragment>
    );
};


