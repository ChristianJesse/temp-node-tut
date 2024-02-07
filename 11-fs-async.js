
const { error } = require('console')
const {readFile,writeFileSync} = require('fs')

console.log('Start');

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    // console.log(result);

    const first =result;
readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return
        }
    const second =result;
        writeFileSync(
            './content/result-sync.txt',
            `Here is the result: ${first},\n${second}`,
            (err,result)=>{
            if(err) {
                console.log(err); 
            return
            }
            console.log('Done ');
            }
        )  
    })
})

console.log('Start Again');