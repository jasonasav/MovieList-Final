read me

This will get you prepped to launch a live version of my app. This will require the installation of some packages, some of which you may already have. 


If you don't already, globally install Node.js on your machine. 

Run the following commands on start up to get server running and to view app. 

Run 
  npm install

Using Babel to transpile code, to install globally. 

  npm install -g babel-cli

Using following command will transpile all code and watch for updates, need seperate terminal window open. Alternatively, you can use our NPM script.

  babel . --out-dir compiled --presets=react --ignore=node_modules,compiled --source-maps inline --watch

                         OR
    npm run build

Install Live Server from npm. 

  npm install -g live-server

Run live server in a new terminal window. Note - This will launch the app in a browser window, http://127.0.0.1:8080/ 

  live-server
                        OR
  npm run server


Movie list app is now running, and ready for live changes. Make sure to have seperate terminal windows for the compiler and live-server as noted in the instructions. 

