import React from 'react';
import LanguageContext from '../../contexts/LanguageContext';

class Button extends React.Component {
    static contextType = LanguageContext;
    render() {
        console.log(this.context);
        return <button className="ui button primary">Submit</button>;
    }
}
// You can use this way to declarate the contextType
// Button.contextType = LanguageContext;

export default Button;