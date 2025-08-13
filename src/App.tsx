
import  { Toaster } from 'react-hot-toast';
import {  Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Loader from './components/reusable/loader';
const Home = lazy(() => import('./components/Home/index'));
const Login = lazy(() => import('./components/login/index'));
const Register = lazy(() => import('./pages/register'));
import ProtectedRoute from './components/ProtectedRoute';
import { TaskProvider } from './context/taskContext';
import { UserProvider } from './context/usersContext';
const  Projects = lazy(() => import('./components/projects'));
const Tasks = lazy(() => import('./components/task/index'));
const UserDashboard = lazy(() => import('./components/user-dashboard/user-dashboard'));


function App() {

  return (
    <>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path='/' element={
            <ProtectedRoute>
              <TaskProvider>
                <UserProvider>
                  <Home/>
                </UserProvider>
              </TaskProvider>
            </ProtectedRoute>
          }/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/tasks' element={<Tasks/>}/>
          <Route path='/dashboard' element={<UserDashboard/>}/>
        </Routes>
      </Suspense>
      <Toaster/>
    </>
  )
}

export default App
