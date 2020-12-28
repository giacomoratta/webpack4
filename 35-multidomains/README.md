# Multi-Domain site

#### DNS and hosts
- Install `dnsmasq`
- set `*.local:8080` to serve `127.0.0.1:8080`
- alternatively add these lines to `/etc/hosts` 
    ```
    127.0.0.1 link.local
    127.0.0.1 zelda.local
    ```
