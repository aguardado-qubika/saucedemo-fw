export const USERS = {
  standard: {
    username: 'standard_user',
    password: 'secret_sauce',
  },
  locked: {
    username: 'locked_out_user',
    password: 'secret_sauce',
  },
  problem: {
    username: 'problem_user',
    password: 'secret_sauce',
  },
  performance_glitch: {
    username: 'performance_glitch_user',
    password: 'secret_sauce',
  },
  invalid: {
    username: 'invalid_user',
    password: 'wrong_password',
  },
} as const;

export type UserType = 'standard_user' | 'locked_out_user' | 'problem_user' | 'performance_glitch_user';

export const USER_CREDENTIALS: Record<UserType, { username: string; password: string }> = {
  standard_user:          { username: 'standard_user',          password: 'secret_sauce' },
  locked_out_user:        { username: 'locked_out_user',        password: 'secret_sauce' },
  problem_user:           { username: 'problem_user',           password: 'secret_sauce' },
  performance_glitch_user:{ username: 'performance_glitch_user',password: 'secret_sauce' },
};

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

// TCs with test.fail() — expected failures documenting known bugs.
// Adding a TC here suppresses it from the failure count in reporter and notify-linear.
export const XFAIL_TCS = new Set<string>([
  'TC-028', // SAU-38: SauceDemo defaults to A to Z; requirement says Z to A
]);

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
  'TC-011': ['SAU-30'],
  'TC-012': ['SAU-31'],
  'TC-013': ['SAU-32'],
  'TC-014': ['SAU-33'],
  'TC-015': ['SAU-33'],
  'TC-016': ['SAU-34'],
  'TC-017': ['SAU-34'],
  'TC-018': ['SAU-34'],
  'TC-019': ['SAU-34'],
  'TC-020': ['SAU-35'],
  'TC-021': ['SAU-35'],
  'TC-022': ['SAU-36'],
  'TC-023': ['SAU-36'],
  'TC-024': ['SAU-37'],
  'TC-025': ['SAU-37'],
  'TC-026': ['SAU-37'],
  'TC-027': ['SAU-37'],
  'TC-028': ['SAU-38'],
  'TC-029': ['SAU-38'],
  'TC-030': ['SAU-38'],
  'TC-031': ['SAU-39'],
  'TC-032': ['SAU-39'],
  'TC-033': ['SAU-39'],
  'TC-034': ['SAU-39'],
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
  { id: 'SAU-30', title: 'Locked out user cannot access the application',      tcs: ['TC-011'] },
  { id: 'SAU-31', title: 'User can add a product to the cart',                 tcs: ['TC-012'] },
  { id: 'SAU-32', title: 'User can complete the checkout process',             tcs: ['TC-013'] },
  { id: 'SAU-33', title: 'User can remove a product from the cart',           tcs: ['TC-014', 'TC-015'] },
  { id: 'SAU-34', title: 'User can sort products on the inventory page',      tcs: ['TC-016', 'TC-017', 'TC-018', 'TC-019'] },
  { id: 'SAU-35', title: 'User can log out of the application',               tcs: ['TC-020', 'TC-021'] },
  { id: 'SAU-36', title: 'Fix the cart',                                      tcs: ['TC-022', 'TC-023'] },
  { id: 'SAU-37', title: 'Improve the entire checkout flow',                 tcs: ['TC-024', 'TC-025', 'TC-026', 'TC-027'] },
  { id: 'SAU-38', title: 'Product sort should default to Z to A',                                         tcs: ['TC-028', 'TC-029', 'TC-030'] },
  { id: 'SAU-39', title: 'Refactor login helper to support all saucedemo.com user types',                tcs: ['TC-031', 'TC-032', 'TC-033', 'TC-034'] },
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
  11: 'TC-011',
  12: 'TC-012',
  13: 'TC-013',
  14: 'TC-014',
  15: 'TC-015',
  16: 'TC-016',
  17: 'TC-017',
  18: 'TC-018',
  19: 'TC-019',
  20: 'TC-020',
  21: 'TC-021',
  22: 'TC-022',
  23: 'TC-023',
  24: 'TC-024',
  25: 'TC-025',
  26: 'TC-026',
  27: 'TC-027',
  28: 'TC-028',
  29: 'TC-029',
  30: 'TC-030',
  31: 'TC-031',
  32: 'TC-032',
  33: 'TC-033',
  34: 'TC-034',
};