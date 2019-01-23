Waiting tests...

HOC working:

```
(App.js)

import reactConsole from 'react-hoc-console';

// Your code...

componentDidMount() {
  console.log('Component Did Mount!');
  console.info('Component Did Mount!');
  console.warn('Component Did Mount!');
  console.debug('Component Did Mount!');
  console.error('Component Did Mount!', 'App.js - 12');
}

// Your code...

export default reactConsole(App, true);


```

<img width="358" alt="screenshot 2019-01-23 at 04 03 19" src="https://user-images.githubusercontent.com/3761994/51586890-07849c80-1ec6-11e9-95e4-33f6bc77d929.png">
