# Readme (Work in progress)

## repo structure

- content (an orchard core instance which exposes a grapqhl api for dynamic content)
- dummy_frontend (basic example of how to consume the orchard core graphql api)

## run the whole stack locally

`install docker`
`docker-compose up`

## setup content service (first time around)

- navigate to localhost:7979
- set a name
- select template blank site (for headless)
- select postgres (db to use)
- enter this connection string: Server=contentdb;Port=5432;Database=contentdb;User Id=donaldduck;Password=hejhopp123
- set a username and password and your email
- click Finish setup
- navigate to localhost:7979/admin and log in with the credentials you just picked
- open configuration -> export/import -> package import
- import /content/DeploymentPackages/Everything.zip
- In configuration -> settings -> localization add en and sv as languages, select en as default and click save
- create ./api/src/config/orchardhooks.env (look at config/exampleenv.txt)

## initial thoughts on setup in test and prod

## content service GOTCHAS

- when adding another language version to a dynamic content type (forexample a human rights card)
  first select the current swedish version and click publish. Then you can add an english version.
