
const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK('98943b5fb15f081d82e6', '971f39396f291aecf6b80a0c9ad2288e1fe40fd7ecfa6dce8bd89f7294a22314');

pinata.testAuthentication().then((result) => {
    //handle successful authentication here
    console.log(result);
}).catch((err) => {
    //handle error here
    console.log(err);
}); 