// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'your api key',
    authDomain: 'your domain.firebase.com',
    databaseURL: 'url.firebaseio.com',
    projectId: 'ft-zxzx',
    storageBucket: 'fx.appspot.com',
    messagingSenderId: '8656'
  }
};
