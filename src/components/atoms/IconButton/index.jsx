import React from "react";
import PropTypes from "prop-types";

import IconButton from "@material-ui/core/IconButton";

const IconButtonComponent = (props) => {
    const { icon, disabled, onClick, color } = props;
    return(
        <IconButton color={color} disabled={disabled} onClick={onClick}>
            {icon}
        </IconButton>
    );
};

export default IconButtonComponent;
