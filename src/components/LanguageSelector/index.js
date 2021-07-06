import React from "react";

class LanguageSelector extends React.Component {
  render() {
    return (
      <div>
        Select a Language:
        <i
          className="flag us"
          onClick={() => this.props.onLanguageChange("english")}
        />
        <i className="flag nl" onClick={() => this.props.onLanguageChange("dutch")} />
        <i
          className="flag es"
          onClick={() => this.props.onLanguageChange("spanish")}
        />
      </div>
    );
  }
}

export default LanguageSelector;
