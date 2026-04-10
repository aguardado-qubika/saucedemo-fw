export const USERS = {
  standard: {
    username: 'standard_user',
    password: 'secret_sauce',
  },
  locked: {
    username: 'locked_out_user',
    password: 'secret_sauce',
  },
  invalid: {
    username: 'invalid_user',
    password: 'wrong_password',
  },
} as const;

export const MESSAGES = {
  lockedOut:        'Epic sadface: Sorry, this user has been locked out.',
  invalidCreds:     'Epic sadface: Username and password do not match any user in this service',
  usernameRequired: 'Epic sadface: Username is required',
  passwordRequired: 'Epic sadface: Password is required',
} as const;

export const URLS = {
  login:     '/',
  inventory: '/inventory.html',
  cart:      '/cart.html',
  checkout:  '/checkout-step-one.html',
} as const;

// Single source of truth for TC → Linear issue mapping
export const TC_TO_LINEAR: Record<string, string[]> = {
  'TC-001': ['SAU-7'],
  'TC-002': ['SAU-8'],
  'TC-003': ['SAU-8'],
  'TC-004': ['SAU-8'],
  'TC-005': ['SAU-9'],
  'TC-006': ['SAU-10'],
  'TC-007': ['SAU-11'],
  'TC-008': ['SAU-48'],
  'TC-009': ['SAU-29'],
  'TC-010': ['SAU-28'],
};

// Single source of truth for TC → Linear issue title mapping
export const LINEAR_ISSUES: Array<{
  id: string;
  title: string;
  tcs: string[];
}> = [
  { id: 'SAU-7',  title: 'User can log in with valid credentials',             tcs: ['TC-001'] },
  { id: 'SAU-8',  title: 'User cannot log in with invalid credentials',        tcs: ['TC-002', 'TC-003', 'TC-004'] },
  { id: 'SAU-9',  title: 'Locked out user cannot access the application',      tcs: ['TC-005'] },
  { id: 'SAU-10', title: 'User can add a product to the cart',                 tcs: ['TC-006'] },
  { id: 'SAU-11', title: 'User can complete the checkout process',             tcs: ['TC-007'] },
  { id: 'SAU-48', title: 'User can sort products by price',                    tcs: ['TC-008'] },
  { id: 'SAU-29', title: 'User cannot log in with invalid credentials',        tcs: ['TC-009'] },
  { id: 'SAU-28', title: 'User can log in with valid credentials',             tcs: ['TC-010'] },
];

// Single source of truth for Qase case ID → TC ID mapping
export const QASE_TO_TC: Record<number, string> = {
  1: 'TC-001',
  2: 'TC-002',
  3: 'TC-003',
  4: 'TC-004',
  5: 'TC-005',
  6: 'TC-006',
  7: 'TC-007',
  8: 'TC-008',
  9: 'TC-009',
  10: 'TC-010',
};