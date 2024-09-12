/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-get-random-values';

// Avoid using node dependent modules
process.browser = true
AppRegistry.registerComponent(appName, () => App);
