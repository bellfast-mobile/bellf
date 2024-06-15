import React from 'react';
import {Alert, Dimensions, ScaledSize, View} from 'react-native';
export const linkedConfig = {
  screens: {
    // Dashboard: 'Dashboard',
    Dashboard: 'Dashboard/newAsset/:assetName',
    config: {
      initialRouteName: 'LoaderScreen',
      screens: {
        LoaderScreen: {
          path: 'LoaderScreen',
        },
        FindYourAccount: {
          path: 'FindYourAccount',
        },
        AccountFound: {
          path: 'AccountFound',
        },
        VerificationCode: {
          path: 'VerificationCode',
        },
        ResetPassword: {
          path: 'ResetPassword',
        },
        RewardsScreen: {
          path: 'RewardsScreen',
        },
        MutedLists: {
          path: 'MutedLists',
        },
        CardsScreen: {
          // eslint-disable-next-line prettier/prettier
          path: 'CardsScreen',
        },
        LoginScreen: {
          path: 'LoginScreen',
        },
        SignUpScreen: {
          path: 'SignUpScreen',
        },
        SignUpPasswordScreen: {
          path: 'SignUpPasswordScreen',
        },
        Dashboard: {
          path: 'Dashboard',
        },
        Post: {
          path: 'Post',
        },
        RepliesScreen: {
          path: 'RepliesScreen',
        },
        WriteCommentScreen: {
          path: 'WriteCommentScreen',
        },
        InsuranceDetails: {
          path: 'InsuranceDetails',
        },
        WriteAPostScreen: {
          path: 'WriteAPostScreen',
        },
        ProfileView: {
          path: 'ProfileView',
        },
        AllCards: {
          path: 'AllCards',
        },
        AddNewCard: {
          path: 'AddNewCard',
        },
        PaymentHistory: {
          path: 'PaymentHistory',
        },
        Settings: {
          path: 'Settings',
        },
        ChangeDisplayName: {
          path: 'ChangeDisplayName',
        },
        ChangePhone: {
          path: 'ChangePhone',
        },
        ChangeDisplayEmail: {
          path: 'ChangeDisplayEmail',
        },
        ChangeDisplayPhone: {
          path: 'ChangeDisplayPhone',
        },
        ChangePassword: {
          path: 'ChangePassword',
        },
        ClaimsHistory: {
          path: 'ClaimsHistory',
        },
        EnterCode: {
          path: 'EnterCode',
        },
        QuoteScreen: {
          path: 'QuoteScreen',
        },
        Signature: {
          path: 'Signature',
        },
        NotificationsSettings: {
          path: 'NotificationsSettings',
        },
        Messaging: {
          path: 'Messaging',
        },
        ChatScreen: {
          path: 'ChatScreen',
        },
        TakeVideoScreen: {
          path: 'TakeVideoScreen',
        },
        CameraScreen: {
          path: 'CameraScreen',
        },
        PreviewVideo: {
          path: 'PreviewVideo',
        },
        ViewAsset: {
          path: 'ViewAsset',
        },
        CartScreen: {
          path: 'CartScreen',
        },
        Notifications: {
          path: 'Notifications',
        },
        AddAccount: {
          path: 'AddAccount',
        },
        WebView: {
          path: 'WebView',
        },
        LoginOtpScreen: {
          path: 'LoginOtpScreen',
        },
      },
    },
  },
};
export const percentageCalculation = (max: number, val: number) =>
  max * (val / 100);
export const fontCalculation = (height: number, width: number, val: number) => {
  const widthDimension = height > width ? width : height;
  const aspectRatioBasedHeight = (16 / 9) * widthDimension;
  return percentageCalculation(
    Math.sqrt(
      Math.pow(aspectRatioBasedHeight, 2) + Math.pow(widthDimension, 2),
    ),
    val,
  );
};

export const responsiveHeight = (h: number) => {
  const {height} = Dimensions.get('window');
  return percentageCalculation(height, h);
};

export const responsiveWidth = (w: number) => {
  const {width} = Dimensions.get('window');
  return percentageCalculation(width, w);
};

export const responsiveFontSize = (f: number) => {
  const {height, width} = Dimensions.get('window');
  return fontCalculation(height, width, f);
};

export const responsiveScreenHeight = (h: number) => {
  const {height} = Dimensions.get('screen');
  return percentageCalculation(height, h);
};

export const responsiveScreenWidth = (w: number) => {
  const {width} = Dimensions.get('screen');
  return percentageCalculation(width, w);
};

export const responsiveScreenFontSize = (f: number) => {
  const {height, width} = Dimensions.get('screen');
  return fontCalculation(height, width, f);
};
