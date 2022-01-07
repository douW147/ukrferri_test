import React from "react";
import { TextField, Button, FormControlLabel, makeStyles, MenuItem, InputLabel, Select, Checkbox } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    formContainer: {
        display: 'flex',
        alignItems: 'center',
        width: '40%',
        flexDirection: 'column',
        border: '1px solid #333',
        borderRadius: '5px',
        padding: '2%'
    },
    container: {
        display: 'flex',
        justifyContent: 'center'
    },
    button: {
        width: '100%',
        height: '40px'
    },
    dropdownContainer: {
        width: '100%'
    },
    borders: {
        border: '1px solid #333',
        borderRadius: '5px'
    },
    textLastName: {
        
    }
}));

function Form () {
    const [data, setData] = React.useState({
        firstName: "",
        lastName: "",
        fathersName: "",
        university: "",
        course: "",
        typeStudy: "",
        number: "",
        email: "",
    })
    const classes = useStyles();

    const [isChecked, setIsChecked] = React.useState(false);
    const [isfirstNameValid, setFirstNameValid] = React.useState(false)

    function handleChange(event) {
        const { name, value } = event.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
        console.log(data);
    }

    function handleCheckbox (event) {
        const checked = !isChecked;
        setIsChecked(checked);
        event.target.value = checked;
        console.log(isChecked);
    }

    function handleSubmit() {
        if (isChecked) {
            let isSomethingEmpty = false;

            // empty fields validation

            data.lastName === "" && (isSomethingEmpty = true) && handleGlobalError("Фамилия");
            data.firstName === "" && (isSomethingEmpty = true) && handleGlobalError("Имя");
            data.fathersName === "" && (isSomethingEmpty = true) && handleGlobalError("Отчество");
            data.university === "" && (isSomethingEmpty = true) && handleGlobalError("Университет");
            data.course === "" && (isSomethingEmpty = true) && handleGlobalError("Курс");
            data.typeStudy === "" && (isSomethingEmpty = true) && handleGlobalError("Тип обучения");
            data.number === "" && (isSomethingEmpty = true) && handleGlobalError("Номер");
            data.email === "" && (isSomethingEmpty = true) && handleGlobalError("email");
            if (!isSomethingEmpty){

                //corect numbers validation

                if (data.number.includes("+") && (/^\d+$/.test(data.number.slice(1,))) && data.number.slice(1,).length === 12){

                    // email validation

                    if (data.email.includes("@")) {
                        var link = "mailto:sashok1111122222@hmail.com"
                        + "?cc=myCCaddress@example.com"
                        + "&subject=" + escape("This is my subject")
                        + "&body=" + escape("fnfjjk")
                        ;

                        window.location.href = link;
                    } else {
                        alert("Не верно введен email")
                    }
                } else {
                    alert("Номер должен быть в форммате: +380123456789")
                }
            }
        } else {
            alert("Примите соглашение на обработку данных");
        }
    }

    function handleGlobalError(field){
        switch (field) {
            case "Фамилия":
                alert("Строка " + field + " не должна быть пустой");
                break;
            case "Имя":
                alert("Строка " + field + " не должна быть пустой");
                break;    
            case "Отчество":
                alert("Строка " + field + " не должна быть пустой");
                break;
            case "Университет":
                alert("Строка " + field + " не должна быть пустой");
                break;
            case "Курс":
                alert("Строка " + field + " не должна быть пустой");
                break;
            case "Тип обучения":
                alert("Строка " + field + " не должна быть пустой");
                break;   
            case "Номер":
                alert("Строка " + field + " не должна быть пустой");
                break;  
            case "email":
                alert("Строка " + field + " не должна быть пустой");
                break;       
            default:
                break;
        }
    }

    // function handleFirstNameError() {
    //     console.log("empty");
    //     return false
    // }
    // function handleLastNameError(active=false) {
    //     console.log("empty");
    //     return active;
    // }
    // function handleFathersNameError() {
    //     console.log("empty");
    // }
    // function handleUniversityError() {
    //     console.log("empty");
    // }
    // function handleCourseError() {
    //     console.log("empty");
    // }
    // function handleTypeStudyError() {
    //     console.log("empty");
    // }
    // function handleNumberError() {
    //     console.log("empty");
    // }
    // function handleEmailError() {
    //     console.log("empty");
    // }
    // function handleCheckboxError() {

    // }

    return (
        <div className={classes.container}>
        <div className={classes.formContainer}>
        <TextField
            className="textLastName"
            fullWidth
            margin="normal"
            type="text"
            label="Фамилия"
            name="lastName"
            value={data.lastName}
            onChange={handleChange}
        />
        <TextField 
            label="Имя"
            fullWidth
            margin="normal"
            type="text"
            name="firstName"
            value={data.firstName}
            onChange={handleChange}
            // error={handleFirstNameError}
        />
        <TextField
            label="Отчество"
            fullWidth
            margin="normal"
            type="text"
            name="fathersName"
            value={data.fathersName}
            onChange={handleChange}
            // error={handleFathersNameError}
        />
        <TextField
            label="Название вашего вуза"
            fullWidth
            margin="normal"
            type="text"
            name="university"
            value={data.university}
            onChange={handleChange}
            // error={handleUniversityError}
        />
        <TextField
            label="Курс"
            fullWidth
            margin="normal"
            type="text"
            name="course"
            value={data.course}
            onChange={handleChange}
            // error={handleCourseError}
        />
        <div className={classes.dropdownContainer}>
            <InputLabel id="demo-simple-select-label">Форма обучения</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="typeStudy"
            value={data.typeStudy}
            onChange={handleChange}
            // error={handleTypeStudyError}
            >
                <MenuItem value="Заочная">Заочная</MenuItem>
                <MenuItem value="Дневная">Дневная</MenuItem>
            </Select>
        </div> 
        <TextField
            label="Ваш телефон"
            fullWidth
            margin="normal"
            type="text"
            name="number"
            value={data.number}
            onChange={handleChange}
            // error={handleNumberError}
        />
        <TextField
            label="Ваш email"
            fullWidth
            margin="normal"
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            // error={handleEmailError}
        />
        <Button
            className={classes.button}
            color="primary"
            variant="contained"
            onClick={handleSubmit}
            type="submit"
        >Отправить</Button>
        <div>
            <Checkbox
                name="isAgree"
                value={isChecked}
                onChange={handleCheckbox}
                inputProps={{ 'aria-label': 'controlled' }}
                color="primary"
                // error={handleCheckboxError}
            />
            <span>Соглашение на обработку личных данных</span>
        </div>
            

        </div>
        </div>
    );
    
}

export default Form;