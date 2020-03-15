import React from "react";
import { Route } from "react-router-dom";
import Hoc from "./src/hoc/hoc";

import Login from "./src/components/auth/Login";
import Signup from "./src/components/auth/Signup";
import Profile from './src/components/Profile'
import Usersettings from './src/components/Usersetting'
import Resetpassword from "./src/components/auth/Resetpassword";
import PasswordChange from './src/components/auth/Passwordchange'
import Homepage from "./src/components/Homepage";
import addCategory from './src/components/compartments/Category'
import SkillsA from './src/components/compartments/SkillsA'
import Education from './src/components/compartments/Education'
import Project from './src/components/project'

const BaseRouter = () => (
  <Hoc>
    <Route exact path="/" component={Homepage} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route exact path="/profile" component={Profile} />
    <Route path="/settings" component={Usersettings} />
    <Route path="/password/reset" component={Resetpassword} />
    <Route path="/password/change" component={PasswordChange} />
    <Route path="/add/category" component={addCategory} />
    <Route path="/add/skills" component={SkillsA} />
    <Route path="/add/education" component={Education} />
    <Route path="/project" component={Project} />
  </Hoc>
);

export default BaseRouter;
