## Deploy steps

1. Run tests
   ```PowerShell
    npm test
    ```

1. Create a new version (patch, minor, major)
Increase version number by using `npm version patch | minor | major`

    *Example: increasing patch version* 
    ```PowerShell
    npm version patch
    ```
1. Push tag to remote
    
    If you tag the commit, TravisCI automatically publishes the package to NPM. 
    ```PowerShell
    git push origin <new version>
    ```
    *Example: git push origin v1.1.17*

    You can follow the build status here -> https://travis-ci.com/configcat/node-sdk
1. Update `configcat-node` dependency in all sample applications:
   1. In `package.json`: `"configcat-node": "^1.1.14"` -> `"configcat-js": "^1.1.17"`
   2. Test sample applications by following their `README.md`.