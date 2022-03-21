# iptables

代码比较乱，而且并没有完整。
说明：
  https://blog.csdn.net/lixuhui2468/article/details/108185748
  
上面是原项目。在次基础上做了除了iptable，增加了获取ssh安全日志，获取系统日志。
在本地执行外，还增加了其他机器的执行。比如iptable可以获取其他机器的防火墙信息和修改其他机器的防火墙。

对应的前端增了两个类型SSHLog，SystemLog。增加了一个字段node，值可以是ip也可以是hostname。

例如：
{node: "10.253.199.82", type: "SystemLog"}
{node: "10.253.199.82", type: "SSHLog"}