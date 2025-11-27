import { AppPath } from '../../../utils/appConstant';
import NavBar from '../../components/nav/NavBar';
import Hero from '../../components/hero/Hero';
import Features from '../../components/features/Features';
import LoginDialog from '../../components/dialog/LoginDialog';
import { useState } from 'react';
import { UserProvider } from '../../../context/UserProvider';

function Home() {
  const linkList = [
    {
      path: AppPath.public.home,
      label: 'Home',
    },
    {
      path: '#',
      label: 'Room list',
    },
    {
      path: '#',
      label: 'Contact',
    },
    {
      path: `#`,
      label: 'About us',
    },
  ];

  const [showLoginDialog, setShowLoginDialog] = useState(false);

  const onCloseDialogHandler = () => {
    setShowLoginDialog(false);
  };

  const onLoginClickHandler = () => {
    setShowLoginDialog(true);
  };

  return (
    <>
      <UserProvider>
        <NavBar onLoginClick={onLoginClickHandler} linkList={linkList} />
        <main>
          <Hero />
          <Features />
          {showLoginDialog && <LoginDialog onClose={onCloseDialogHandler} />}
        </main>
      </UserProvider>
    </>
  );
}

export default Home;
