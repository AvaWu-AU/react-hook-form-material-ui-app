import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { Controller } from "react-hook-form";
// import { FormInputProps } from "./FormInputProps";

const options = [
    {
        label: "China",
        value: "1",
    },
    {
        label: "Australia",
        value: "2",
    },
    {
        label: "USA",
        value: "3",
    },
]
export const FormInputDropdown : React.FC<any> = ({name, control, label}) => {
    const generateSingleOptions =() => {
        return options.map((option: any) => {
            return (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            );
        });
};
        return(
            <FormControl size={"small"}>
                <InputLabel>{label}</InputLabel>
                <Controller
                    render={({ field: { onChange, value } }) => (
                    <Select onChange={onChange} value={value}>
                        {generateSingleOptions()}
                    </Select>
                    )}
                    control={control}
                    name={name}
                />
            </FormControl>
        ); 
};
