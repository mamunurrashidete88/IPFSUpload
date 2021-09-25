
const fs = require('fs')
const path = require('path')
const cid = require('cids')
const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK('myKey', 'mysecret');

 async function main() {
 
  //while files in directory.. Get all cryptodaemons one at a time and mint them.
   
  for (let count = 0; count < 1; count++) {
  
      let rawdata = fs.readFileSync("metaDataFiles/hero-metadata-"+count+".json"); //read in incomplete herometadata
      let metaData = JSON.parse(rawdata);
      await CreatePinMeta(metaData, count);
      console.log("IPFS metadata created:", metaData);
      }
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
}); 



// Start for x loop

async function CreatePinMeta(metadata, count) {

MyCustomName = "hero" + count

MyFileName = "HeroImages/hero-" + count + ".x3.png"

const readableStreamForFile = fs.createReadStream(MyFileName);
const options = {
    pinataMetadata: {
        name: MyCustomName,
        keyvalues: {
            customKey: 'CryptoHeroPNG',
            customKey2: 'FirstEdition'
        }
    },
    pinataOptions: {
        cidVersion: 0
    }
};

return pinata.pinFileToIPFS(readableStreamForFile, options).then((result) => {
    //send result hash CID to create Metadata.
    console.log(result);

           metadata.image = result.IpfsHash;
         //this is the meta data that points to the PNG, pinning JSON to pinata.
          const body = metadata;
          console.log(metadata);    
          const options = {
              pinataMetadata: {
                  name: "metadata.json",   //this will always be named metadata.json
                  keyvalues: {
                      customKey: 'CryptoHeroMetaData'
                  }
              },
              pinataOptions: {
                  cidVersion: 0
              }
          };
        
         
         return pinata.pinJSONToIPFS(body, options).then((result) => {
              //handle results here Create NFT here.  
              // return IpfsHash for URI to mint NFT.                               
              return result.IpfsHash;
          }).catch((err) => {
              //handle error here
              console.log(err);
          });     


}).catch((err) => {
    //handle error here
    console.log(err);
});

} 
