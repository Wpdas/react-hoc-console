import React from 'react';
import logo from './assets/react_logo.svg';
import classes from './reactConsole.module.scss';

//Console Style Types
const ConsoleStyleTypes = {
  LOG: { color: 'white' },
  WARNING: { color: '#eedf0c' },
  INFO: { color: '#077591' },
  DEBUG: { color: '#279107' },
  ERROR: { color: '#911c07' },
  ERROR_MARKER: {
    backgroundColor: 'rgb(238, 56, 12)',
    padding: '2px'
  }
};

//Components
const SuperBar = () => {
  return (
    <div className={classes.SuperBar}>
      <img src={logo} alt="logo" />
      <span>Console</span>
    </div>
  );
};

const Text = ({ style, children }) => {
  return (
    <span className={classes.Text} style={style}>
      {children}
    </span>
  );
};

class Stage extends React.Component {
  constructor(props) {
    super(props);
    this.original = {
      log: window.console.log,
      warn: window.console.warn,
      info: window.console.info,
      debug: window.console.debug
    };

    this.date = new Date();

    this.log = this.log.bind(this);
    this.warn = this.warn.bind(this);
    this.info = this.info.bind(this);
    this.debug = this.debug.bind(this);
    this.error = this.error.bind(this);
    this.clear = this.clear.bind(this);
    this.processText = this.processText.bind(this);

    window.console.log = this.log;
    window.console.warn = this.warn;
    window.console.info = this.info;
    window.console.debug = this.debug;
    window.console.error = this.error;
    window.console.clear = this.clear;

    window.onerror = (errorMessage, file, lineNumber, columnNumber) => {
      const error =
        file + ':' + lineNumber + (columnNumber ? ':' + columnNumber : '');
      window.console.error(errorMessage, error);
    };
  }

  state = {
    texts: []
  };

  log(logText) {
    if (logText) {
      this.processText(logText, ConsoleStyleTypes.LOG);
      this.original.log.call(this, logText);
    }
  }

  warn(warnText) {
    if (warnText) {
      this.processText(warnText, ConsoleStyleTypes.WARNING);
      this.original.warn.call(this, warnText);
    }
  }

  info(infoText) {
    if (infoText) {
      this.processText(infoText, ConsoleStyleTypes.INFO);
      this.original.info.call(this, infoText);
    }
  }

  debug(debugText) {
    if (debugText) {
      this.processText(debugText, ConsoleStyleTypes.DEBUG);
      this.original.debug.call(this, debugText);
    }
  }

  error(errorText, errorFiles) {
    let subError;

    if (errorFiles) {
      let splitLocation = errorFiles.split('/');
      let filterToReplace = splitLocation[splitLocation.length - 1];
      subError = filterToReplace;
    }

    if (errorText) {
      const errorDirectionBody = (
        <Text style={ConsoleStyleTypes.ERROR_MARKER}>{subError}</Text>
      );

      let errorTextBody = errorFiles ? `${errorText} --> ` : errorText;

      this.processText(
        errorTextBody,
        ConsoleStyleTypes.ERROR,
        errorDirectionBody
      );
    }
  }

  clear() {
    this.setState({ texts: [] });
  }

  processText(text, consoleStyle, additionalText) {
    let { texts } = this.state;
    let updatedTexts = texts;
    additionalText = additionalText || null;

    updatedTexts.push(
      <div key={texts.length}>
        <Text style={consoleStyle}>{text}</Text> {additionalText}
        <br />
      </div>
    );
    this.setState({ texts: updatedTexts });
  }

  render() {
    return <div className={classes.Stage}>{this.state.texts}</div>;
  }
}

const reactConsole = (WrappedComponent, active) => {
  return class extends React.Component {
    render() {
      const consoleUI = (
        <div className={classes.ConsoleUI}>
          <SuperBar />
          <Stage />
        </div>
      );

      const finalRender = active ? (
        <div>
          {consoleUI}
          <WrappedComponent {...this.props} />
          <div className={classes.ExtraSpace} />
        </div>
      ) : (
        <WrappedComponent {...this.props} />
      );

      return finalRender;
    }
  };
};

export default reactConsole;
