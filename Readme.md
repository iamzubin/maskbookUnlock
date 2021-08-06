# Maskbook Unlock Server

## Setup

Environment variable required `MONGO_URL`

## How to run

1. Clone the repository 
2. run `npm install`
3. compile using tsc
4. run `node dist/src/server.js`

## todo
- [x] basic structure of the mvc framework
- [x] add database
- [x] basic authentication using signed msessage
- [x] checking possesion of the unlock token
- [x] store keys to unlock
- [x] provide the keys to follower/reader having access to the keys
- [x] Change all the res.send to res.json
- [ ] user can only post if they owns the lock (???)
