var sampleArray = ['cat' , 'dog', 'monkey' ];
console.log(sampleArray[1]);
sampleArray [3] = 'donkey';
console.log(sampleArray);
console.log("Length of array" +sampleArray.length);
sampleArray.push('Chimp');
for (var i=0; i<sampleArray.length;i++){
   document.write(i+" ) " + sampleArray[i]+"<br>");
    
}
traverseArray(sampleArray);