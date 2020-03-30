# Readme (Work in progress)

## repo structure
* api (the api where we tie everything together, integrations, serving clients, emit events to perhaps firestore etc...)
* content (an orchard core instance which exposes a grapqhl api for dynamic content, if needed?)
* frontend (the main mobile webb/app, consumes api, if we start with mobile webb which I hope!)
* admin (a separate admin webb, consumes api)
* bikestore (web for bike store admins, consumes api)

## run the whole stack locally
``docker-compose up`` 

## setup content service (first time around)
* navigate to localhost:7979  
* set a name
* select template blank site (for headless)  
* select postgres (db to use)
* enter this connection string: Server=contentdb;Port=5432;Database=contentdb;User Id=donaldduck;Password=hejhopp123
* set a username and password and your email 
* click Finish setup
* navigate to localhost/admin and log in with the credentials you just picked 
* open configuration -> export/import -> package import
* import /content/DeploymentPackages/Everything.zip 
* In configuration -> settings -> localization add en and sv as languages, select en as default and click save
* create ./api/src/config/orchardhooks.env (look at config/exampleenv.txt)
* in workflows -> for all workflows with incoming webhooks -> click regenerate token -> copy&paste token to ./api/src/config/orchardhooks.env (e.g CONTENT_SERVICE_CREATE_SERVICE_CATEGORY_HOOK_URL=token)(tokens needs to be generated on the current instance)


## initial thoughts on setup in test and prod
I am thinking something like this:  
api.fixi.se (replace with actual domain later)  
content.fixi.se (if only public otherwise proxy thru API to plug in the auth solution..)  
fixi.se could be both our main mobile web AND their current landing page if we lift this into our solution/hosting otherwise we could also serve our frontend at another subdomain.
app.fixi.se ?? something...  

(then we could do testapi.fixi.se, testcontent.fixi.se, testapp.fixi.se)

## content service GOTCHAS 
* when adding another language version to a dynamic content type (forexample a bikestore)
first select the current swedish version and click publish. Then you can add an english version.  
