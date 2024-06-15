import ImageColors from 'react-native-image-colors'

export const color = {
  primary: '#662D91',
  // secondary: 'red',
  secondary: '#FFA1A5',
  secondaryShades: { 100: '#FAEEEB', 200: '#FEF4F4', 300: '#FDF3F1', 400: '#F57D58', 500: '#FFA1A5' },
  primaryShades: { 100: '#FAEEEB', 200: '#FEF4F4', 300: '#FDF3F1', 400: '#BE93FD', 500: '#662D91' },
  whiteShades: { 400: '#EDEFF2'},
  blacks: { 400: '#494949', 500: '#070600' },
  secondaryFaded: '#FEF4F4',
  success: '#2BB673',
  default: '#070600',
  text: '#070600',
  white: "#fafafa",
  purple: '#BE93FD',
  offWhite: '#E5E5E5;',
  grey: '#EDEFF2',
  green: '#53E1A5',
  red: '#FF2B2B',
  disabledPrimary: '#A393AE',
  border: '#E5E5E5',
  hint: '#494949',
  NotiWhite:"#F9F5FF",
  NotiBorder:"#EAF0FE",
  error: '#F9F5FF'
}


export const getBackgroundColor = async (uri) => {
  const result = await ImageColors.getColors(uri, {
    fallback: '#228B22',
    cache: false,
    key: 'unique_key',
  })
  let color = ''
  switch (result.platform) {
    case 'android':
      // android result properties
      color = result.vibrant
      break
    case 'web':
      // web result properties
      color = result.lightVibrant
      break
    case 'ios':
      // iOS result properties
      color = result.primary
      break
    default:
      throw new Error('Unexpected platform key')
  }
  return { color, ...result }
}

