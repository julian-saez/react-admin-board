import { Suspense } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import NotFound from './utilities/NotFound'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import './App.css'
import LoginComponent from './pages/login/Login';
import { Provider } from 'react-redux';
import store from './redux/store';
import PrivateRoutes from './models/routes/private_routes';
import AuthGuard from './guards/auth.guard';
import DashboardPage from './pages/dashboard/Dashboard';


function App() {
  return (
    <Suspense>
        <Provider store={store}>
            <BrowserRouter>
                <NotFound>
                <Route path="/login" element={<LoginComponent />} />
                <Route element={<AuthGuard privateValidation={true} />}>
                    <Route path={PrivateRoutes.PRIVATE} element={<p>Private routes</p>} />
                    <Route path={PrivateRoutes.DASHBOARD} element={<DashboardPage />} />
                </Route>
                </NotFound>
            </BrowserRouter>
        </Provider>
    </Suspense>
  )
}

export default App
