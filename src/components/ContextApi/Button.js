import React from "react";
import LanguageContext from "./contexts/LanguageContext";
import ColorContext from "./ColorContext";

class Button extends React.Component {
  // static contextType = LanguageContext;
  // using static, adding a property directly to the class itself
  renderSubmit(value) {
    return value === "english" ? "Submit" : "등록";
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>{(value) => this.renderSubmit(value)}</LanguageContext.Consumer>
        {/* one child. and always function*/}
      </button>
    );
  }
  render() {
    // console.log(this.context);
    return <ColorContext.Consumer>{(color) => this.renderButton(color)}</ColorContext.Consumer>;
  }
}
// static 대신 이렇게 써도 된다.
// Button.contextType = LanguageContext;
export default Button;

/**
 * this.context말고 Consumer를 써야하는 이유?
 * we will make use of consumer any time that
 * we want to get information out of
 * multiple different context objects inside of a single component
 */
