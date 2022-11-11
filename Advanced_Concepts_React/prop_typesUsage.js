import React from "react";
import PropTypes from "prop-types";

/**
 * propTypes are useful for prop validation and documentation.
 * The value of a propType is an object, not a function and is decleared after the component has been defined
 * 
 */
class MessageDisplayer extends React.Component {
    render(){
        return <h1>{this.props.message}</h1>;
    }
}


MessageDisplayer.propTypes = {
    message: PropTypes.string
};