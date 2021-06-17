import "@date-io/date-fns";
import {
    Button,
    FormControlLabel,
    makeStyles,
    Radio,
    RadioGroup,
    TextField
} from "@material-ui/core";
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from "@material-ui/pickers";
import {Controller, useForm} from "react-hook-form";

let arr = [];

const useStyles = makeStyles({
    form: {
        display: "flex",
        flexDirection: "column",
        width: "300px",
        background: "white",
        padding: "15px",
        borderRadius: "5px"
    },
    item: {
        margin: "0 0 30px 0"
    }
});

const Form = () => {
    const classes = useStyles();
    const {control, reset, handleSubmit} = useForm();

    const onSubmit = (data) => {
        arr.push(data);
        localStorage.setItem("Задачи", JSON.stringify(arr));
        reset({
            title: "",
            description: "",
            date: new Date(),
            status: ""
        })
    }

    return (
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <Controller name="title" render={({field}) =>
                <TextField
                    {...field}
                    label="Название задачи"
                    variant="outlined"
                    className={classes.item}
                />
            }
                        rules={{
                            required: true,
                        }}
                        control={control}
                        defaultValue=""
            />
            <Controller name="description" render={({field}) =>
                <TextField {...field} multiline rows={5} label="Описание задачи" variant="outlined"
                           className={classes.item} />
            }
                        control={control}
                        defaultValue=""
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Controller name="date"
                            control={control}
                    /* eslint-disable-next-line no-unused-vars */
                            render={({ field: {ref, ...rest} }) => (
                                <KeyboardDatePicker
                                    margin="normal"
                                    label="Дата выполнения"
                                    format="MM/dd/yyyy"
                                    className={classes.item}
                                    {...rest}
                                />
                            )}
                            defaultValue={new Date()}
                />
            </MuiPickersUtilsProvider>
            <Controller
                name="status"
                control={control}
                render={({ field }) => (
                    <RadioGroup aria-label="Статус задачи" className={classes.item} {...field}>
                        <FormControlLabel value="Активная" control={<Radio />} label="Активная"/>
                        <FormControlLabel value="Отложенная" control={<Radio />} label="Отложенная"/>
                        <FormControlLabel value="Отмененная" control={<Radio />} label="Отмененная"/>
                    </RadioGroup>
                )}
                defaultValue="Активная"
            />
            <Button type="submit">Добавить задачу</Button>
        </form>
    )
}

export default Form;