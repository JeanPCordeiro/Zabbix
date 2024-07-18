from zabbix_utils import ZabbixAPI

api = ZabbixAPI(url="127.0.0.1")
api.login(user="Admin", password="zabbix")

users = api.user.get(
    output=['userid','username','name','roleid']
)

for user in users:
    print(user['userid'],user['username'],user['name'],user['roleid'])

api.logout()