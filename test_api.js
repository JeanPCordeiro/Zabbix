const { ZabbixClient } = require("@fjedi/zabbix-client");

const client = new ZabbixClient("http://localhost/api_jsonrpc.php");

const api = await client.login("api_user", "zabbixpwd");
// To enable relogin: client.login("theusername", "thepassword", true);

const allHosts = await api.method("host.get").call();

// The version info needs an unauthenticated user, you
// can disable the token sending using the second parameters
// like the following
const version = await api.method("apiinfo.version").call({}, false);

console.log(version); // 4.0.0