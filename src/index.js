import React from 'react';

//Default Style
const classes = {
  ConsoleUI: {
    bottom: '0',
    position: 'fixed',
    width: '100%'
  },

  ExtraSpace: {
    height: '282px'
  },

  SuperBar: {
    width: '100%',
    height: '32px',
    background: '#1d1d1d',
    display: 'flex'
  },

  SuperBar_span: {
    color: '#fff',
    fontFamily: 'sans-serif',
    fontSize: '0.9em',
    padding: '8px 8px 8px 0px'
  },

  SuperBar_img: {
    height: '22px',
    padding: '5px'
  },

  Stage: {
    width: 'calc(100% - 16px)',
    height: '250px',
    background: '#0e0e0e',
    padding: '8px',
    overflowY: 'scroll'
  },

  Text: {
    fontFamily: 'sans-serif',
    fontSize: '0.9em',
    borderBottom: '1px solid #1f1f1f',
    width: '100%',
    paddingBottom: '4px',
    display: 'block'
  }
};

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
    <div style={classes.SuperBar}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 841.9 595.3"
        style={classes.SuperBar_img}
        alt="logo"
      >
        <g fill="#61DAFB">
          <path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z" />
          <circle cx="420.9" cy="296.5" r="45.7" />
          <path d="M520.5 78.1z" />
        </g>
      </svg>
      <span style={classes.SuperBar_span}>Console</span>
    </div>
  );
};

const Text = ({ style, children }) => {
  const textStyle = {
    ...classes.Text,
    ...style
  };
  return <span style={textStyle}>{children}</span>;
};

class Stage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      texts: []
    };

    this.stageRef = React.createRef();

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
    this.getHTMLCode = this.getHTMLCode.bind(this);
    this.onStageChangeHandler = this.onStageChangeHandler.bind(this);

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

  /**
   * Author: kennebec - https://stackoverflow.com/a/2474742
   */
  getHTMLCode(element) {
    if (!element || !element.tagName) return '';
    let txt,
      ax,
      el = document.createElement('div');
    el.appendChild(element.cloneNode(false));
    txt = el.innerHTML;
    ax = txt.indexOf('>') + 1;
    txt = txt.substring(0, ax) + element.innerHTML + txt.substring(ax);
    el = null;
    return txt;
  }

  onStageChangeHandler() {
    const { current } = this.stageRef;
    const { autoScroll } = this.props;
    if (autoScroll) {
      current.scrollTo(0, current.scrollHeight);
    }
  }

  processText(text, consoleStyle, additionalText) {
    if (text.constructor === Object) {
      text = JSON.stringify(text);
    } else if (text.constructor !== String) {
      text = this.getHTMLCode(text);
    }

    let { texts } = this.state;
    let updatedTexts = texts;
    additionalText = additionalText || null;

    updatedTexts.push(
      <div key={texts.length}>
        <Text style={consoleStyle}>{text}</Text> {additionalText}
      </div>
    );
    this.setState({ texts: updatedTexts }, () => {
      this.onStageChangeHandler();
    });
  }

  render() {
    return (
      <div ref={this.stageRef} style={classes.Stage}>
        {this.state.texts}
      </div>
    );
  }
}

const reactConsole = (WrappedComponent, active = true, autoScroll = true) => {
  return class extends React.Component {
    render() {
      const consoleUI = (
        <div style={classes.ConsoleUI}>
          <SuperBar />
          <Stage autoScroll={autoScroll} />
        </div>
      );

      const finalRender = active ? (
        <div>
          {consoleUI}
          <WrappedComponent {...this.props} />
          <div style={classes.ExtraSpace} />
        </div>
      ) : (
        <WrappedComponent {...this.props} />
      );

      return finalRender;
    }
  };
};

export default reactConsole;
