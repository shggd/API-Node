# Node Api


### Prerequisites

-Node  
https://nodejs.org/en/

-Mongodb  
https://www.mongodb.com/

 ### Installing
 ##### Getting the source code:
  ```bash
git clone https://github.com/shggd/API-Node.git
```

##### Dependencies:
```bash
npm install
```

#### Config database
Create a .env file in the root directory
```
DB_HOST=localhost
DB_USER=admin
DB_PASS=password
```

process.env now has the keys and values defined in the .env file.
```javascript
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}${process.env.DB_HOST}`,{useMongoClient:true})
  .then(()=>{console.log("DB connected")},
err=>{console.log(err)});
```
### Running
```bash
cd API-Node
npm index.js
```
