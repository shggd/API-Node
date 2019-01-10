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


# Usage

#### Json Responses

### User

```JSON
{
    "success": true,
    "token": "token",
    "user": {
        "id": "5b345f8d0c697044b09e626b",
        "email": "example@email.com",
        "username": "example"
    }
  }
}
```

### All Dogs

```JSON
[
    {
        "_id": "5b68c5848da19f3098838a4d",
        "name": "CAT 1 ",
        "image": "images/1.jpg",
        "description": "Since cats were venerated in ancient Egypt, they were.....",
        "__v": 0,
        "created": "2018-08-06T22:02:44.048Z"
    },
    {
        "_id": "5b68c6dfea8a233358a83308",
        "name": "CAT 2",
        "image": "images/2.jpg",
        "description": "Since cats were venerated in ancient Egypt, they were.....",
        "__v": 0,
        "created": "2018-08-06T22:08:31.163Z"
    },
    {
        "_id": "5b68c6eae1404a3080fefcd6",
        "name": "CAT 3",
        "image": "images/3.jpg",
        "description": "Since cats were venerated in ancient Egypt, they were.....",
        "__v": 0,
        "created": "2018-08-06T22:08:42.733Z"
    }
]

```
### Single Dog with Comment
```JSON
{
    "info": {
        "_id": "5b68c5848da19f3098838a4d",
        "name": "CAT 1 ",
        "image": "images/1.jpg",
        "description": "Since cats were venerated in ancient Egypt.....",
        "__v": 0,
        "created": "2018-08-06T22:02:44.048Z"
    },
    "comment": [
        {
            "_id": "5c31b43565fd1c0014cefaf5",
            "comment": "example comment",
            "__v": 0,
            "rating": null,
            "editdate": null,
            "date": "2019-01-06T07:54:29.017Z",
            "post": {
                "_id": "5b68c5848da19f3098838a4d",
                "name": "CAT 1 "
            },
            "author": {
                "_id": "5b345f6b0c697044b09e626a",
                "username": "admin"
            }
        }
    ]
}
```

### Multiple Products
```JSON
{
    "products": [
        {
            "_id": "5b347d358d9e7f10d4530d36",
            "name": "Awesome Fresh Bike",
            "images": "https://images.dog.ceo/breeds/germanshepherd/n02106662_3815.jpg",
            "price": 983,
            "description": "Omnis facilis incidunt autem est ex repellendus quae deleniti. Omnis dicta excepturi vitae. Ad ex vero minus autem esse qui sit. Non ex qui.Qui dicta aut qui illum laudantium. Nemo illo enim. Tempora velit architecto est sit accusantium debitis. Molestiae rerum dignissimos deleniti. Rem non quod qui iste eos natus. Dignissimos vel odio deleniti assumenda.",
            "quantity": 10,
            "__v": 0
        },
        {
            "_id": "5b347d4c8d9e7f10d4530d44",
            "name": "Awesome Wooden Car",
            "images": "https://images.dog.ceo/breeds/dhole/n02115913_3270.jpg",
            "price": 954,
            "description": "Maiores ut dolorem ex quia aut nihil. Magnam qui sunt natus consequuntur veniam eum minima perspiciatis quia. Aperiam at assumenda est error. Id est sint est dolore ea quae culpa. Voluptatibus maxime necessitatibus deserunt illo.Impedit ab enim. Aut qui optio reprehenderit. Rem dicta debitis. Deleniti illum veritatis repudiandae. Non voluptatum dolores labore et est.",
            "quantity": 10,
            "__v": 0
        },
    ],
    "currentPage": 1,
    "totalPage": 3
}
```
### Single Product
```JSON
{
    "_id": "5b347d358d9e7f10d4530d36",
    "name": "Awesome Fresh Bike",
    "images": "https://images.dog.ceo/breeds/germanshepherd/n02106662_3815.jpg",
    "price": 983,
    "description": "Omnis facilis incidunt autem est ex repellendus quae deleniti. Omnis dicta excepturi vitae. Ad ex vero minus autem esse qui sit. Non ex qui.Qui dicta aut qui illum laudantium. Nemo illo enim. Tempora velit architecto est sit accusantium debitis. Molestiae rerum dignissimos deleniti. Rem non quod qui iste eos natus. Dignissimos vel odio deleniti assumenda.",
    "quantity": 10,
    "__v": 0
}
```

### Single Order
```JSON
{
    "success": true,
    "data": {
        "_id": "5c368a327d460b00142d18b9",
        "orderNumber": 1421129767,
        "totalItem": 4,
        "totalPrice": 96,
        "__v": 0,
        "shoppingCart": [
            {
                "_id": "5b347d2e8d9e7f10d4530d2c",
                "name": "Ergonomic Cotton Tuna",
                "count": 4
            }
        ]
    }
}
```

# Endpoints

### Authentication:
`POST api/user/signin`
Body example:
```JSON
{
 "username":"example",
 "password":"example"
}
```
Return a [User](#User)  
Required fields: `username`,`password`

### Registration:
`POST api/user/register`

Body example:
```JSON
{
 "email":"example",
 "username":"example",
 "password":"example"
}
```
Return a [User](#User)  
Required fields: `email`,`username`,`password`

### New Comment:
`POST api/doge/:id/comment`  
Body example:  
```JSON
{
 "comment":"i like this"
}
```
Authentication required  
Required fields:`comment`  

### Update Comment:
`PUT api/doge/edit/:commentid`
Body example:  
```JSON
{
 "comment":"i like this"
}
```
Authentication required  
Required fields:`comment` 

### Delete Comment:
`DELETE api/delete/:commentid`  
Authentication required  


### Get Dog:
`GET api/doge`  
Return [All dogs](#All-Dogs)

### Get Single dog:
`GET api/doge/:id`  
Return [Single dog](#Single-Dog-with-Comment)

### Get multiple products:
`GET api/product/`  
Return [Multiple Products](#multiple-products)  

Query Parameters:
Change page:  
`?page=2`

Sort option:  
`?sortOption='name:asc'`  

### Get single product:
`GET api/product/:id`
Return [Single Product](#Single-Product)


### Search Product:
`GET api/product/search?keyword=awesome`  
Return [Multiple Products](#multiple-products)  


### Get order info:
`GET api/cart/order?ordernumber=3412314`  
Return [Single Order](#Single-Order)


