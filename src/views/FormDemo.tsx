import { Button, Paper, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { FormInputDropdown } from "./components/FormSelect";

interface IFormInput {
    selectValue: string;
}
const defaultValues = {
    selectValue: "",
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