import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();
/**
 * 
 * @param routeName 
 * @param params 
 */
export const navigate = (routeName: string, params?: any) => {
  if(navigationRef.isReady()) {
    // console.log('navigate', routeName, params);
    // @ts-ignore
    navigationRef.current?.navigate(routeName, params);
  }
}

export const navigateBack = () => {
  if(navigationRef.canGoBack()) {
    // console.log('navigate', routeName, params);
    // @ts-ignore
    navigationRef.current?.goBack;
  }
}