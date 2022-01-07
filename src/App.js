import Router from "./Router";
import MyProvider from './provider'

const App = () => {
  return (
    <MyProvider>
      <Router />
    </MyProvider>
  );
};

export default App;
