// import { test, expect } from '@playwright/test';
import Login from '../pages/login.ts';
import Logout from '../pages/logout.ts';
import {test} from '../fixtures/fixture.ts';
import Project from '../pages/project.ts';

test.describe("Workflow Testing", ()=>{

  let login: Login;
  let logout: Logout;
  let project: Project;

  test.beforeAll('Setup', async({userPage})=>{
    login = new Login(userPage);
    logout = new Logout(userPage);
    project = new Project(userPage);
  })

  test('Create Project', async () => {
    await project.CreateProject();
  });

  test.afterAll('Teardown', async({userPage})=>{
    await logout.LogoutFromApplication();
    await userPage.close();
  })

})



