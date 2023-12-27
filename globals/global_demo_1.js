console.log(__dirname);
console.log(__filename);

let encryptedMsg = btoa("Good Morning");
console.log(encryptedMsg);

let decryptedMsg = atob(encryptedMsg);
console.log(decryptedMsg)