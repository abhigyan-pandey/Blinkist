import React from "react";

import TextField from '@material-ui/core/TextField';

const InputFieldComponent = (props) => { 
    const { label,value,required,onChange,onBlur,type,error,errorMessage } = props;
    return(
        <TextField
            fullWidth
            label={label}
            defaultValue={value}
            required={required}
            onChange={onChange}
            error={error}
            helperText={errorMessage}
            type={type}
            onBlur={onBlur}
            variant="outlined"
            InputLabelProps={{
            shrink: true,
            }}
        />
    );
};

export default InputFieldComponent;
