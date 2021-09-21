import {NativeModules} from 'react-native';
import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

let options = {};
if (__DEV__) {
  const scriptURL = NativeModules.SourceCode.scriptURL;
  options.host = scriptURL.split('://')[1].split(':')[0];
}

const reactotron = Reactotron.configure(options)
  .useReactNative()
  .use(reactotronRedux())
  .connect();

export default reactotron;
