# Multi-Domain site and Redux

#### DNS and hosts
- Install `dnsmasq`
- set `*.local:8080` to serve `127.0.0.1:8080`
- alternatively add these lines to `/etc/hosts` 
    ```
    127.0.0.1 link.local
    127.0.0.1 zelda.local
    ```
  
#### Differentiate by domains
- Usage of `req.hostname` in server (for SSR)
- Usage of `location.hostname` in react components
- Different data and css per domain

### Redux
- setup for client
- setup for server rendering
- connect components with redux + test redux
- added redux devtools

# Redux-thunk
- async actions
- pull markdown data from API
- `npm i cross-fetch` for platform agnostic API fetch

# Redux-client
- focusing on the express endpoint that servers the markdown
- install libraries for loading markdown: `npm i marked yaml-front-matter`
- set hot-reloading about reducers