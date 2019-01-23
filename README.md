# React HOC Console

This is a simple HOC that allows you to see what is happening with the native console API, however, into your app. It's personalizable, I mean, you can activate or deactivate this HOC.

### How to use

The `reactConsole` method provides two parameters, the first one is waiting for a React component. The second one is a boolean that activates or deactivate the console UI. You still be able to see the native console working through the dev tools.

```javascript
reactConsole(component:React.Component, activate:boolean);
```

### HOC working:

Below is a code generated by `npx create-react-app` and modified to show the effect of the console.
[Read more](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app).

```javascript
import React, { Component } from 'react';
import reactConsole from 'react-hoc-console';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    console.log('Component Did Mount!');
    console.info('Component Did Mount!');
    console.warn('Component Did Mount!');
    console.debug('Component Did Mount!');
    console.error('Component Did Mount!', 'App.js - 12');
    // console.clear();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default reactConsole(App, true);
```

<img width="358" alt="screenshot 2019-01-23 at 04 03 19" src="https://user-images.githubusercontent.com/3761994/51586890-07849c80-1ec6-11e9-95e4-33f6bc77d929.png">
