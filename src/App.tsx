
import  { Toaster } from 'react-hot-toast';
import {  Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Loader from './components/reusable/loader';
const Home = lazy(() => import('./components/Home/index'));
const Login = lazy(() => import('./pages/login'));
const Register = lazy(() => import('./pages/register'));
import ProtectedRoute from './components/ProtectedRoute';


function App() {

  return (
    <>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path='/' element={
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
          }/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </Suspense>
      <Toaster/>
    </>
  )
}

export default App
