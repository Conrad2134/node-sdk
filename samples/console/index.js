var configcat = require("configcat-node");

var configCatClient = configcat.createClientWithAutoPoll('PKDVCLf-Hq-h-kCzMp-L7Q/HhOWfwVtZ0mb30i9wi17GQ', { pollIntervalSeconds: 2 });
// You can instantiate the client with different polling modes. See the Docs: https://docs.configcat.com/docs/sdk-reference/js/#polling-modes

configCatClient.getValueAsync("isAwesomeFeatureEnabled", false).then(value => {
    console.log("isAwesomeFeatureEnabled: " + value);
});

var userObject = { identifier: "#SOME-USER-ID#", email: "configcat@example.com" };
// Read more about the User Object: https://docs.configcat.com/docs/sdk-reference/js/#user-object
configCatClient.getValueAsync("isPOCFeatureEnabled", false, userObject).then(value => {
    console.log("isPOCFeatureEnabled: " + value);
});