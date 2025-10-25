import { Button } from "../../core/Button";
import Dialog from "./Dialog";
function LoginDialog() {
  return (
    <>
      <Dialog>
        <form>
          <h2>Login</h2>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <Button type="submit">Login</Button>
        </form>
      </Dialog>
    </>
  );
}

export default LoginDialog;
