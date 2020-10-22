import React from 'react';
import { useFonts } from 'expo-font';
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';

import Routes from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    N600SM: Nunito_600SemiBold,
    N700B: Nunito_700Bold,
    N800EB: Nunito_800ExtraBold,
  });

  if(!fontsLoaded){
    return null;
  }

  return (
    <>
      <Routes />
    </>
  )
};
