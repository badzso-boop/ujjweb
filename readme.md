# Fo backend api
## ujjweb
    - basic backend ami egy frontendet szolgal ki
    - react.js => npm run build
    - package.js => homepage: http://localhost:3000/{link_amin_kiszolgal_a_fajl}
    - react-router => basename={link}

### Feladatok
    - corsoptions
    - middleware
    - routes

## poetry
    - 

## mese
    - 

## Documentation
### API
    - poetryRouter
        - prefix: __/poetry__
        - routes:
            - users
                - GET
                    - response: json
                    - body: cors
                - POST
                    - response: ok, error
                    - body: user data
                - PUT
                - DELETE
            - poems
            - auth
            - comments
            - albums
            - follows
            - labels
    - ujjwebRouter
        - prefix: __/ujjweb__
        - routes:
            - not yet
    - meseRouter