## Node-Express-React App Boilerplate
To run the app, first install dependencies using `yarn install`, then run one of the available scripts.

### Available Scripts
`yarn server-debug`
Runs the server backend with inspector on port 5858 (`--inspect=5858`). See sample launch config below.

`yarn client-start`
Runs the client frontend via live dev server using react-scripts. 

`yarn run build`
Bundles the client application code for deployment. Minified bundle builds to `client/build` folder.

#### Sample VS Code Launch Config
```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Debug Server",
            "runtimeExecutable": "npm",
            "runtimeArgs": [
                "run",
                "server-debug"
            ],
            "port": 5858,
            "sourceMaps": true
        },
        {
            "type": "chrome",
            "request": "launch",
            "name": "Launch Chrome against localhost",
            "url": "http://localhost:3001",
            "webRoot": "${workspaceFolder}"
        }
    ]
}
```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
