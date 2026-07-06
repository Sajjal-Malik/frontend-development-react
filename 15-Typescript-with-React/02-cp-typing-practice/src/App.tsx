// import Button from "./Button";

import { type Info, type MoreInfo } from './types';

import AdminInfo from "./AdminInfo";
import UserInfo from "./UserInfo";

const App = () => {

  const Admin: MoreInfo = {
    id: 1,
    name: "John Wick",
    email: "john@example.com",
    role: "ADMIN",
    lastLogin: new Date()
  };

  const User: Info = {
    id: 2,
    name: "Sarah John",
    email: "sarh@example.com",
  };

  // const handleClick = () => {
  //   console.log("Button is Clicked in Child Component.");
  // }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', }}>
      <AdminInfo admin={Admin} />
      <UserInfo user={User} />
      {/* <Button label={"React with Typescript is Way Better"} onClick={handleClick} disabled={false} /> */}
    </div>
  )
}

export default App;
