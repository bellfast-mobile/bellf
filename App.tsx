import {
  ActivityIndicator,
  Alert,
  Animated,
  Easing,
  Linking,
  Platform,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {Provider, useDispatch, useSelector} from 'react-redux';
//import store from './redux/store';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import {linkedConfig} from './helpers';
import {Button, Image, NativeBaseProvider} from 'native-base';
// import Camera from './Screens/Camera';
import Dashboard from './Screens/Dashboard';
import LandingScreen from './Screens/LandingScreen';
import FindYourAccount from './Screens/Find Account/FindYourAccount';
import AccountFound from './Screens/Find Account/AccountFound';
import VerificationCode from './Screens/Find Account/VerificationCode';
import ResetPassword from './Screens/Find Account/ResetPassword';
import LoginScreen from './Screens/Auth/LoginScreen';
import SignUpScreen from './Screens/Auth/SignUpScreen';
import SignUpGender from './Screens/Auth/SignUpGender';
import SignUpDOB from './Screens/Auth/SignUpDOB';
import SignUpOTP from './Screens/Auth/SignUpOtp';
import {navigationRef} from './RootNavigation';
import theme from './src/assets/theme';
const linking = {
  prefixes: ['haba://', 'http://haba.insure', 'https://haba.insure'],
  linkedConfig,
};

type Props = {};

function MainApp() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [isReady, setIsReady] = useState<{
    hasToken: boolean;
    hasDeviceId: boolean;
  }>({
    hasToken: false,
    hasDeviceId: false,
  });
  const [appToken, setAppToken] = useState<string | undefined>();
  const [notificationModal, setNotificationModal] = useState<{
    title: string;
    android?: any;
    body: string;
    ttl?: number;
    status: string;
  }>({});
  const user = useSelector(state => state.auth.user);
  const loader = useSelector(state => state.auth);
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  const Stack = createStackNavigator();
  const token = useSelector((state: any) => state.auth.token);



  // const
  // console.log("RERS",appIsReady)
  return (
    <SafeAreaView
      style={{flex: 1, paddingBottom: 0}}
      edges={['top', 'left', 'right']}>
      {loader.loading ? (
        <View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: '#ffffff87',
            justifyContent: 'center',
            zIndex: 9999999,
          }}>
          <ActivityIndicator
            color={color.primary}
            size={'small'}
            style={{alignSelf: 'center'}}
          />
        </View>
      ) : null}
      <CenterModal
        isOpen={Boolean(notificationModal.title)}
        title={notificationModal.title}
        body={notificationModal.body}
        icon={() =>
          notificationModal.status === 'success' ? <SuccessIcon /> : null
        }
        onClose={() => setNotificationModal({})}
      />
      {!appIsReady ? (
        <View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: '#ffffff',
            justifyContent: 'center',
            zIndex: 9999999,
          }}>
          <Image
            alt="loader"
            style={{
              width: 150,
              height: 150,
              alignSelf: 'center',
            }}
            resizeMode="contain"
            source={require('./src/assets/images/logo/main.png')}
          />
          <ActivityIndicator
            color={'white'}
            size={'small'}
            style={{alignSelf: 'center'}}
          />
        </View>
      ) : (
        <NavigationContainer linking={linking} ref={navigationRef}>
          <Stack.Navigator
            initialRouteName={appToken ? 'Dashboard' : 'LandingScreen'}
            defaultScreenOptions={{
              headerShown: true,
            }}>
            {/* <Stack.Screen name="LoaderScreen"
                component={LoaderScreen}
                options={{ headerShown: false }} /> */}
            {token ? (
              <>
                <Stack.Screen
                  name="Dashboard"
                  component={Dashboard}
                  options={{headerShown: false}}
                />

              </>
            ) : (
              <>
                <Stack.Screen
                  name="LandingScreen"
                  component={LandingScreen}
                  options={{headerShown: false}}
                />

                <Stack.Screen
                  name="FindYourAccount"
                  component={FindYourAccount}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name="AccountFound"
                  component={AccountFound}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name="VerificationCode"
                  component={VerificationCode}
                  options={{headerShown: false}}
                />
             

              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </SafeAreaView>
  );
}

const App = (props: Props) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  return (
    <SafeAreaProvider>
      <NativeBaseProvider theme={theme}>
        //<Provider store={store}>
          <MainApp />
          {/* <LoaderScreen /> */}
          {/* <LandingCamera /> */}
       // </Provider>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
};

export default App;
