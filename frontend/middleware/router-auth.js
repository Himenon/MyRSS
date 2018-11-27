const authRequiredPath = [
  '/buy',
  '/user',
];

function isRequredAuthenticated(route) {
  if (route.matched.some(record => _.includes(authRequiredPath, record.path))) {
    return true;
  }
}

export default function ({store, redirect, route}) {
  store.state.user.authenticated === true && route.name === 'login' ? redirect('/user') : '';
  store.state.user.authenticated === false && isRequredAuthenticated(route) ? redirect('/login') : '';
}
