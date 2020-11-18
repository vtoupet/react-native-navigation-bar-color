import {NativeModules, Platform} from 'react-native';

const {NavigationBarColor} = NativeModules;

const changeNavigationBarColor = (
  color = String,
  light = false,
  animated = true,
) => {
  if (Platform.OS === 'android') {
    return NavigationBarColor.changeNavigationBarColor(color, light, animated);
  } else {
    return false;
  }
};
const hideNavigationBar = () => {
  if (Platform.OS === 'android') {
    return NavigationBarColor.hideNavigationBar();
  } else {
    return false;
  }
};
const showNavigationBar = () => {
  if (Platform.OS === 'android') {
    return NavigationBarColor.showNavigationBar();
  } else {
    return false;
  }
};

export {changeNavigationBarColor, hideNavigationBar, showNavigationBar};
