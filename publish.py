import redis
import json




def publish():
    data = {
	"name": "Sebuhi",
	"surname": "Shukurov",
	"room": "12345" 
}

    rdb = redis.Redis(host="127.0.0.1", port=6379,db=0)
    data = json.dumps(data)
    rdb.publish("channel",data) 
    print(data)

publish()
