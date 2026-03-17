// import { test, expect } from '@playwright/test';
import Login from '../pages/login.ts';
import Logout from '../pages/logout.ts';
import {test} from '../fixtures/fixture.ts'

test.describe("Workflow Testing", ()=>{

  let login: Login;
  let logout: Logout;

  test.beforeAll('Setup', async({userPage})=>{
    login = new Login(userPage);
    logout = new Logout(userPage);
    await userPage.waitForTimeout(10000);
  })

  test('has title', async () => {
    console.log("Logged In");
  });

  test.afterAll('Teardown', async({userPage})=>{
    await logout.LogoutFromApplication();
    await userPage.close();
  })

})



