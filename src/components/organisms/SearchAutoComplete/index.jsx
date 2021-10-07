import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const  SearchAutoComplete = (props) => {
    const {inputData} = props;
    console.log(inputData, 'searchcomplete');
    return (
        <Autocomplete
          id="combo-box-demo"
          options={inputData}
          getOptionLabel={(option) => option.name}
          style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Search Books" variant="standard" />}
        />
      );
};

export default SearchAutoComplete;
