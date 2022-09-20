import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, SxProps, Theme } from "@mui/material";
import { useTranslation } from "react-i18next";
interface TdSelectProps {
    data: any;
    size?: "small" | "medium";
    labelI18nKey: string;
    keyValue?: string;
    textValue?: string;
    sx: SxProps<Theme>;
    onChange?: (e) => void;
}
//make value default
const defaultProps = {
    size: "medium",
    keyValue: "Id",
    textValue: "Text"
};

export const TdSelect = (props: TdSelectProps & typeof defaultProps) => {

    const { data, keyValue, size, labelI18nKey, textValue, sx } = props;
    const { t } = useTranslation()
    const onChange = (e: SelectChangeEvent) => {
        if (props.onChange) {
            props.onChange(e)
        }
    }
    return (
        <FormControl size={size} fullWidth sx={sx}>
            <InputLabel id={`${labelI18nKey}`}>
                {t(`${labelI18nKey}`)}
            </InputLabel>
            <Select
                onChange={onChange}
                labelId={`${labelI18nKey}`}
                label={t(`${labelI18nKey}`)}
            >
                {data && data.map((item, index) => {
                    return (
                        <MenuItem key={`${labelI18nKey}+${index}`} value={item[keyValue]}>{item[textValue]}</MenuItem>
                    )
                })}
            </Select>
        </FormControl >
    )
}
TdSelect.defaultProps = defaultProps;
