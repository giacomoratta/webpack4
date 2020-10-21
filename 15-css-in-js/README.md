## Webpack4 + CSS in JS
- cloned from `11-react`

#### Setup
- install `babel-preset-react`

#### Hot-reloading
When the page reload automatically after a change, the react state is restored to the initial value. To preserve the state after a hot-reload:
- install `react-hot-loader@next`
- add some logic to support hot-reloading for specific components (see `app.js`)

#### Define CSS in modules, but it is defined in `<header>`
- install `emotion`
- see `counter.js`
    - `css` function create css definitions
    - each definition in a separate `<style data-emotion>`
- we want to use `react props` in css
    - install `@emotion/core` and `@emotion/styled`
    - install `babel-plugin-emotion`
    - add plugin `emotion` to `.babelrc`
        - now, `<style data-emotion>` has a big comment like `/*#sourceMappingURL=.../*` in addiction
    - import emotion plugins in `counter.js` and create a `FancyH1` component
    