import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "./contexts/LanguageContext";
import ColorContext from "./ColorContext";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language });
  };
  render() {
    return (
      <div className="ui container">
        <div>
          Select a langeuge:
          <i className="flag us" onClick={() => this.onLanguageChange("english")} />
          <i className="flag kr" onClick={() => this.onLanguageChange("korean")} />
        </div>
        {/* {this.state.language} */}
        <br />
        <ColorContext.Provider value="primary">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;

/**
 * NOTE:
 * Provider로 감싸주지 않고,
 * <UserCreate />만 쓰면 default value가 나온다.
 * its never going to be given a value from provider.
 * never sees update.
 *
 * provider is essentially creating
 * a separate type of information every single time
 * you use it every time you use provider.
 * You have this separate channel of information
 * flowing down to a separate set of components.
 */
