import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import New from './pages/new/New';
import Single from './pages/single/Single';
import { productInputs } from './formSource';
import { 
  BrowserRouter, 
  Routes, 
  Route, 
  Navigate
} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import { ProductProvider } from './context/ProductContext';

import './App.css';


function App() {
  const {currentUser} = useContext(AuthContext);

  const RequireAuth = ({children}) => {
    return currentUser ? (children) : <Navigate to='/login' />;
  };

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/">
          <Route path="login" element={<Login />}/>
          <Route 
            index 
            element={<RequireAuth><Home /></RequireAuth>}
          />
          
          <Route path="products">
            <Route 
              index 
              element={
                <RequireAuth>
                  <ProductProvider>
                  <List />
                  </ProductProvider>
                </RequireAuth>
              } 
            />
            <Route 
              path=":productId" 
              element={
                <RequireAuth>
                  <ProductProvider>
                  <Single />
                  </ProductProvider>
                </RequireAuth>
              } 
            />
            <Route 
              path="new" 
              element={
                <RequireAuth>
                  <ProductProvider>
                    <New inputs={productInputs} title='Add New Book' />
                  </ProductProvider>
                </RequireAuth>
              } 
            />
          </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
