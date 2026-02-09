import { Outlet } from 'react-router';
import { UserProvider } from '../../context/UserProvider';

function RootLayout() {
  return (
    <>
      <UserProvider>
        <Outlet />
      </UserProvider>
    </>
  );
}

export default RootLayout;
