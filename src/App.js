import React from 'react';
import AppNavigator from './modules/navigators/AppNavigator';
import ErrorBoundary from './ErrorBoundary ';
const App = () => {
  return (
    <ErrorBoundary fallback="There was an error">
      <AppNavigator />
    </ErrorBoundary>
  );
};

export default App;
