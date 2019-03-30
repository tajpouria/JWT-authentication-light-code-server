## JWT authentication server :: Light code JSON WEB TOKEN authentication server for develpment porpuses

Actually i' m trying to wire up a develpoment authentication serve for my dev enviroment

## Tools i' m used :

     Mongodb
     nodemon
    "bcrypt-nodejs": "0.0.3",
    "body-parser": "^1.18.3",
    "express": "^4.16.4",
    "jwt-simple": "^0.5.5",
    "mongoose": "^5.4.20",
    "morgan": "^1.9.1",
    "passport": "^0.4.0",
    "passport-jwt": "^4.0.0",
    "passport-local": "^1.0.0"

## What the suppose of use it ?

server using Restful API to signup and singing user ; it also provide unique jwt for each user ' the jwt should be store in header of your request with authorization key (lowercase a) ';<br>
it will store passwords as an encypt password in MONGO-DB (using bcryptlibrary);
jwt authentication and email , pass authentication is handle with `posport-local` and `posport-jwt` plugin from posport library;

## What in future ?

i'm think i'm gonna add a bunch of user interface and another fature to this light code sever!

\*\* Note : if you want use it you also need a 'confing.js' file in root diectory that export a object and it's have a secret property must be String:
e.g. expoerts = {
secret : "<random string >"
}
