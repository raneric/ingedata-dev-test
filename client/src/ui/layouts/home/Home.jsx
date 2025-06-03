import styles from './home.module.css'
import { Button } from "../../core/Button";
import { useNavigate } from 'react-router';
import { AppPath } from '../../../utils/appConstant';

function Home() {

  const navigate = useNavigate();

  const userSpaceClickHandler = () => {
    navigate(AppPath.room.all);
  }
  const adminSpaceClickHandler = () => {
    navigate(AppPath.admin.home);
  }

  return (
    <div className={styles.home}>
      <Button onClick={userSpaceClickHandler}>
        User space
      </Button>
      <Button onClick={adminSpaceClickHandler}>
        Admin space
      </Button>
    </div>
  )
}

export default Home;
