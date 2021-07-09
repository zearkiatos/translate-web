import React from 'react';
import LanguageContext from '../contexts/LanguageContext'

class LanguageStore extends React.Component {
    state = { language: 'english' };

    onLanguageChange = (language) => {
        this.setState({ language });
    };

    render() {
        return (
            <LanguageContext.Provider value={{...this.state, onLanguageChange: this.onLanguageChange }}>
                {this.props.children}
            </LanguageContext.Provider>
        );
    }
}

export default LanguageStore;