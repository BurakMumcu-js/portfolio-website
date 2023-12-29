import  React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import AppScreen from './screens/AppScreen';
import WebScreen from './screens/WebScreen';

function App() {
  return (
    <BrowserRouter>   
 
  <Routes>
    <Route path='/' index element={<HomeScreen/>}/>
    <Route path='/App' element={<AppScreen/>}/>
    <Route path='/Web' element={<WebScreen/>}/>
  </Routes>
   </BrowserRouter>
  );
}

export default App;
