import styles from "./auth.module.css";
import { Button } from "../../core/Button";
import { useNavigate } from "react-router";
import { AppPath } from "../../../utils/appConstant";

function AuthLayout() {
  const navigate = useNavigate();

  const userSpaceClickHandler = () => {
    navigate(AppPath.room.all);
  };
  const adminSpaceClickHandler = () => {
    navigate(AppPath.admin.home);
  };

  return (
    <div className={styles.authContainer}>
      <Button onClick={userSpaceClickHandler}>User space</Button>
      <Button onClick={adminSpaceClickHandler}>Admin space</Button>
    </div>
  );
}

export default AuthLayout;
