# Pub/Sub Node.js application using expres.


##### This Simple Node Js application allows you render your HTML views and static files through express and have real time socket connection. Using SocketIO library, client side establises connection emiting data from events. Redis is used to publish data from any backend server to Nodesj using Pub/Sub pattern. 





#### In our example Node js app subscibres to the channel. With python script we publish the message.


#### Pub/Sub operation through SocketIO


### Usage


In order to run Nodejs:

npm install

node index.js

Python:

```python

python3 -m venv .venv

source .venv/bin/activate

pip install redis

python publish.py

```

Docker:
```sh


docker-compose up --build -d

without detach mode:

docker-compose up --build 



```