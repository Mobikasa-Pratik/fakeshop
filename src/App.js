import './App.css';
import Header from './components/Header';
import { 
  BrowserRouter as Router,
  Route,
  Switch
 } from 'react-router-dom';
import Collection from './pages/Collection';
import Product from './pages/Product';
import Page404 from './pages/Page404';

function App() {
  return (
    <>
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <Collection />
        </Route>
        <Route path="/collections/:collection_id">
          <Collection />
        </Route>
        <Route path="/products/:product_id">
          <Product />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
