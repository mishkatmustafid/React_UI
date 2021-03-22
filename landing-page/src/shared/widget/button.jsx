import { Component } from "react";
import PropTypes from "prop-types";

export default class Button extends Component {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
    onSubmit: PropTypes.func,
    disabled: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let className = "btn";
    if (this.props.disabled) {
      className = "${className} disabled";
    }
    return (
      <button
        className={"${className} ${this.props.className}"}
        style={{ ...this.props.style }}
        onClick={this.props.onClick}
        onSubmit={this.props.onSubmit}
        type={this.props.type}
      >
        {this.props.children}
      </button>
    );
  }
}

export class SpinnerButton extends Component {
  static propTypes = {
    smallSpin: PropTypes.bool,
    spinType: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  // Recheck this logic tree
  // if spintype == grow case 1
  // otherwise case 2 (whether grow or null)
  config() {
    let className = "spinner-border";
    if (this.props.spinType) {
      if (this.props.spinType === "grow") {
        className = "spinner-grow";
        if (this.props.smallSpin) {
          className = `${className} spinner-grow-sm`;
        }
      } else {
        if (this.props.smallSpin) {
          className = `${className} spinner-border-sm`;
        }
      }
    } else {
      if (this.props.smallSpin) {
        className = `${className} spinner-border-sm`;
      }
    }
    return className;
  }

  render() {
    const className = this.config();
    return (
      <Button
        className={`${this.props.className}`}
        style={{ ...this.props.style }}
        onClick={this.props.onClick}
        onSubmit={this.props.onSubmit}
      >
        <div className={className}></div>
        {this.props.children}
      </Button>
    );
  }
}
