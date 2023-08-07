import { Fragment } from 'react';
import './App.css';
import Header from './component/Layout/Header';
import Meal from './component/Meals/Meals';

function App() {
  return (
   <Fragment>
    <Header />
    <main>
      <Meal />
    </main>
   </Fragment>

  );
}

export default App;
