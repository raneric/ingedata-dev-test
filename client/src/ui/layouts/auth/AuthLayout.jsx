import { Outlet } from 'react-router';
//import loginStyles from './auth.module.css';
function AuthLayout(){
   return (
        <main>
            {Outlet}
        </main>
    )
}

export default AuthLayout;