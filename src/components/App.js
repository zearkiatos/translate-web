import React from 'react';
import UserCreate from './userCreate';
import LanguageContext from '../contexts/LanguageContext';

class App extends React.Component {
    state = { language: 'english' };

    onLanguageChange = language => {
        this.setState({ language });
    };

    render() {
        return (
            <div className="ui container">
                <div>
                    Select a Language:
                    <i className="flag us" onClick={() => this.onLanguageChange('english')} />
                    <i className="flag nl" onClick={() => this.onLanguageChange('dutch')} />
                    <i className="flag es" onClick={() => this.onLanguageChange('spanish')} />
                </div>
                <LanguageContext.Provider value={this.state.language}>
                    <UserCreate />
                </LanguageContext.Provider>

                <LanguageContext.Provider value="dutchs">
                    <UserCreate />
                </LanguageContext.Provider>
            </div>
        );
    }
}

export default App;