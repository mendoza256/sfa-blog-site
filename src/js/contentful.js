const contentful = require("contentful");

console.log("first");

const client = contentful.createClient({
  space: "231i4ecmbavi",
  environment: "master", // defaults to 'master' if not set
  accessToken: "wosTM2SJnO6jQr82SIZuRBfGgsL1QmgTk_wU9kpIpZE",
});

client
  .getEntries()
  .then((response) => console.log(response.items))
  .catch(console.error);
