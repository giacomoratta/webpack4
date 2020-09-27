## Webpack4 + CSS in JS
- cloned from `11-react`


#### Setup
- install `babel-preset-react`

#### Hot-reloading
When the page reload automatically after a change, the react state is restored to the initial value. To preserve the state after a hot-reload:
- install `react-hot-loader@next`
- add some logic to support hot-reloading for specific components (see `app.js`)