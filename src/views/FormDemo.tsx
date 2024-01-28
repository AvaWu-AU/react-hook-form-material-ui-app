import { Button, Paper, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { FormInputDropdown } from "./components/FormSelect";
// import { FormInputDate  } from "./components/FormInputDate";
import { FormInputMultiCheckbox  } from "./components/FormInputMultiCheckbox";


interface IFormInput {
    selectValue: string;
    dateValue: Date;
    checkboxValue: string[];
}
const defaultValues = {
    selectValue: "",
    dateValue: new Date(),
    checkboxValue: [],
}

const FormDemo = () => {
    const {handleSubmit, reset, control, setValue } = useForm<IFormInput>({
        defaultValues: defaultValues,
    });
    const onSubmit = (data: IFormInput) => console.log(data);

    return(
        <Paper
            style= {{
                display: "grid",
                gridRowGap: "20px",
                padding: "20px",
                margin: "10px 300px"
            }}
            >
                <FormInputDropdown
                    name="dropdownValue"
                    control={control}
                    label="Dropdown Input"
                />
                {/* <FormInputDate name="dateValue" control={control} label="Date Input" /> */}
                <FormInputMultiCheckbox
                    control={control}
                    setValue={setValue}
                    name={"checkboxValue"}
                    label={"Checkbox Input"}
                />
                <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
                    Submit
                </Button>
                <Button onClick={() => reset()} variant={"outlined"}>
                    Reset
                </Button>
            </Paper>
    )
}

export default FormDemo;