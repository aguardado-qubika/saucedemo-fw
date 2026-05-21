import { test, expect } from '../fixtures/test-fixtures';
import { USERS, MESSAGES } from '../utils/test-data';
import { qase } from 'playwright-qase-reporter';

test.describe('Login Page — SAU-7, SAU-8, SAU-9, SAU-28, SAU-29, SAU-30, SAU-39, SAU-65', () => {

    // TC-001 — SAU-7
    test('TC-001 — should login successfully with valid credentials',
        async ({ loginPage, inventoryPage }) => {
            qase.id(1);
            qase.title('Successful login with valid credentials');

            await loginPage.loginWith(
                USERS.standard.username,
                USERS.standard.password
            );

            await expect(inventoryPage.getPageTitle(), 'Inventory page title should be "Products"')
                .toHaveText('Products');
            await expect(inventoryPage.getProductItems(), 'At least one product should be displayed')
                .not.toHaveCount(0);
        });

    // TC-002 — SAU-8
    test('TC-002 — should show error with invalid credentials',
        async ({ loginPage }) => {
            qase.id(2);
            qase.title('Login with invalid credentials');

            await loginPage.loginWith(
                USERS.invalid.username,
                USERS.invalid.password
            );

            const errorMsg = loginPage.getErrorMessage();
            await expect(errorMsg, 'Error message should be visible after invalid login').toBeVisible();
            await expect(errorMsg, 'Error message should describe invalid credentials')
                .toContainText(MESSAGES.invalidCreds);
        });

    // TC-003 — SAU-8
    test('TC-003 — should show error when username is empty',
        async ({ loginPage }) => {
            qase.id(3);
            qase.title('Login with empty username');

            await loginPage.open();
            await loginPage.fillPassword(USERS.standard.password);
            await loginPage.clickLogin();

            await expect(loginPage.getErrorMessage(), 'Error message should require username')
                .toContainText(MESSAGES.usernameRequired);
        });

    // TC-004 — SAU-8
    test('TC-004 — should show error when password is empty',
        async ({ loginPage }) => {
            qase.id(4);
            qase.title('Login with empty password');

            await loginPage.open();
            await loginPage.fillUsername(USERS.standard.username);
            await loginPage.clickLogin();

            await expect(loginPage.getErrorMessage(), 'Error message should require password')
                .toContainText(MESSAGES.passwordRequired);
        });

    // TC-009 — SAU-29
    test('TC-009 — should remain on login page after failed login attempt',
        async ({ loginPage, page }) => {
            qase.id(9);
            qase.title('User remains on login page after invalid credentials');

            await loginPage.loginWith(
                USERS.invalid.username,
                USERS.invalid.password
            );

            const errorMsg = loginPage.getErrorMessage();
            await expect(errorMsg, 'Error message should be visible').toBeVisible();
            await expect(errorMsg, 'Error message should describe invalid credentials')
                .toContainText(MESSAGES.invalidCreds);
            await expect(page, 'User should remain on the login page').toHaveURL('/');
        });

    // TC-005 — SAU-9
    test('TC-005 — should show error for locked out user',
        async ({ loginPage }) => {
            qase.id(5);
            qase.title('Locked out user cannot access application');

            await loginPage.loginWith(
                USERS.locked.username,
                USERS.locked.password
            );

            const errorMsg = loginPage.getErrorMessage();
            await expect(errorMsg, 'Error message should be visible for locked out user').toBeVisible();
            await expect(errorMsg, 'Error message should indicate account is locked')
                .toContainText(MESSAGES.lockedOut);
        });

    // TC-010 — SAU-28
    test('TC-010 — should redirect to inventory page after valid login',
        async ({}) => {
            qase.id(10);
            qase.title('Valid login redirects to inventory with Products title');
        });

    // TC-011 — SAU-30
    test('TC-011 — should show locked out error and remain on login page',
        async ({ loginPage, page }) => {
            qase.id(11);
            qase.title('Locked out user sees error and stays on login page');

            await loginPage.loginWith(
                USERS.locked.username,
                USERS.locked.password
            );

            const errorMsg = loginPage.getErrorMessage();
            await expect(errorMsg, 'Error message should be visible for locked out user').toBeVisible();
            await expect(errorMsg, 'Error message should indicate account is locked')
                .toContainText(MESSAGES.lockedOut);
            await expect(page, 'Locked out user should remain on login page').toHaveURL('/');
        });

    // TC-031 — SAU-39
    test('TC-031 — standard_user can log in successfully',
        async ({ loginPage, inventoryPage }) => {
            qase.id(31);
            qase.title('standard_user login succeeds and reaches inventory');

            await loginPage.loginAs('standard_user');

            await expect(inventoryPage.getPageTitle(), 'Inventory page title should be "Products"')
                .toHaveText('Products');
        });

    // TC-032 — SAU-39
    test('TC-032 — problem_user can log in successfully',
        async ({ loginPage, inventoryPage }) => {
            qase.id(32);
            qase.title('problem_user login succeeds and reaches inventory');

            await loginPage.loginAs('problem_user');

            await expect(inventoryPage.getPageTitle(), 'Inventory page title should be "Products"')
                .toHaveText('Products');
        });

    // TC-033 — SAU-39
    test('TC-033 — locked_out_user cannot log in',
        async ({ loginPage }) => {
            qase.id(33);
            qase.title('locked_out_user login is blocked with error message');

            await loginPage.loginAs('locked_out_user');

            const errorMsg = loginPage.getErrorMessage();
            await expect(errorMsg, 'Error message should be visible for locked out user').toBeVisible();
            await expect(errorMsg, 'Error message should indicate account is locked')
                .toContainText(MESSAGES.lockedOut);
        });

    // TC-034 — SAU-39
    test('TC-034 — performance_glitch_user can log in with delayed response',
        async ({ loginPage, inventoryPage }) => {
            test.setTimeout(60000);
            qase.id(34);
            qase.title('performance_glitch_user login eventually succeeds');

            await loginPage.loginAs('performance_glitch_user');

            await expect(inventoryPage.getPageTitle(), 'Inventory page title should be "Products" after slow login')
                .toHaveText('Products');
        });

    // TC-048 — SAU-65
    test('TC-048 — all required form elements are visible on login page load',
        async ({ loginPage }) => {
            qase.id(48);
            qase.title('All form elements visible on login page load');

            await loginPage.open();

            await expect(loginPage.getLogo(), 'Logo should be visible').toBeVisible();
            await expect(loginPage.getUsernameInput(), 'Username input should be visible').toBeVisible();
            await expect(loginPage.getPasswordInput(), 'Password input should be visible').toBeVisible();
            await expect(loginPage.getLoginButton(), 'Login button should be visible').toBeVisible();
        });

    // TC-049 — SAU-65
    test('TC-049 — form elements have correct placeholder text and button label',
        async ({ loginPage }) => {
            qase.id(49);
            qase.title('Form elements have correct placeholder and button text');

            await loginPage.open();

            await expect(loginPage.getUsernameInput(), 'Username input should have placeholder "Username"')
                .toHaveAttribute('placeholder', 'Username');
            await expect(loginPage.getPasswordInput(), 'Password input should have placeholder "Password"')
                .toHaveAttribute('placeholder', 'Password');
            await expect(loginPage.getLoginButton(), 'Login button should have value "Login"')
                .toHaveValue('Login');
        });

    // TC-050 — SAU-65
    test('TC-050 — error message is not visible on initial page load',
        async ({ loginPage }) => {
            qase.id(50);
            qase.title('Error message not visible on initial page load');

            await loginPage.open();

            await expect(loginPage.getErrorMessage(), 'Error message should not be visible on page load')
                .toBeHidden();
        });

    // TC-051 — SAU-65
    test('TC-051 — exactly one of each form element exists in the DOM',
        async ({ loginPage }) => {
            qase.id(51);
            qase.title('Exactly one username input, password input, and login button in DOM');

            await loginPage.open();

            await expect(loginPage.getUsernameInput(), 'Exactly one username input should exist').toHaveCount(1);
            await expect(loginPage.getPasswordInput(), 'Exactly one password input should exist').toHaveCount(1);
            await expect(loginPage.getLoginButton(), 'Exactly one login button should exist').toHaveCount(1);
        });

});
