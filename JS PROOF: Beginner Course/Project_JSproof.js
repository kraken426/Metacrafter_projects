/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const lateNFTs = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _uid , _whylate , _marksdeducted, _remarks) {
   const NFT = {
      "id": lateNFTs.length+1,
      "name": _name,
      "uid": _uid,
      "whylate": _whylate,
      "marksdeducted": _marksdeducted,
      "remarks": _remarks
   };
   lateNFTs.push(NFT);
   console.log("Successfully Minted:", _name);  //as chris said done this for conformation.
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0; i<lateNFTs.length;i++){
        console.log("\n")
        console.log("ID:", lateNFTs[i].id);
        console.log("Name:", lateNFTs[i].name);
        console.log("UID:", lateNFTs[i].uid);
        console.log("Why Late:", lateNFTs[i].whylate);
        console.log("Marks Deducted:", lateNFTs[i].marksdeducted);
        console.log("Remarks:", lateNFTs[i].remarks);
}
}
// print the total number of NFTs we have minted to the console
function getTotalSupply() {
   console.log("Total Supply:", lateNFTs.length);
}

// call your functions below this line
mintNFT("ayush","21cbt1053","familyissue","0","shouldnothappenagain");
mintNFT("rishabh","21cbt1065","badhealth","0","shouldnothappenagain");
mintNFT("kartik","21cbt1047","lazy","10","snorlaxlol");
mintNFT("rupam","21cbt1024","cheatingcase","15","getrekt");
mintNFT("amitesh","21cbt1183","trainingchange","0","okay");
getTotalSupply()
listNFTs()
