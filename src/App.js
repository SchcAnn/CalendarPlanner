import { Routes, Route } from "react-router-dom";
import { FirstScreen } from './components/firstScreen/FirstScreen';
import { InputForm } from './components/firstScreen/InputForm';
import { RegistrationForm } from './components/firstScreen/RegistrationForm';
import { All } from './components/all';
import { MoreInformationAbout } from './components/listTask/MoreInformation'

import './App.css';

function App() {
  return (
    <div className="app">

      <Routes>
        <Route element={<FirstScreen />} path='/' />
        <Route element={<InputForm />} path='/SignIn' />
        <Route element={<RegistrationForm />} path='/signUp' />
        <Route element={<All />} path='/Calendar' />
        <Route element={<MoreInformationAbout />} path='/InformationAboutPlanning' />
      </Routes>

    </div>
  );
}

export default App;
