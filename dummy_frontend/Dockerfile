# build front end and create src/dist folder
FROM node:12.16.1 as build
WORKDIR /app
COPY . . 
WORKDIR /app/src    

RUN npm install --no-optional
RUN npm run build

# run tests...
# left to wire up..

# build actual run time (copy src/dist folder from previous step)
FROM node:12.16.1 as runtime
WORKDIR /app
COPY package.json .
COPY server.js .
RUN npm install -only=production
COPY --from=build /app/src/build ./src/build
EXPOSE 8080
ENTRYPOINT ["npm", "run", "start"]