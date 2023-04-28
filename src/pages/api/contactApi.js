import * as fs from 'fs'
export default async function  handler(req, res) {
    if(req.method ==='POST'){
        console.log(req.body)
        let data=await fs.promises.readdir('../contactData');
        fs.promises.writeFile("contactData/1.json",JSON.stringify(req.body))
        console.log(data)
        res.status(200).json(req.body)
    }
    else{
        res.status(200).json({ name: 'John Doe' })
    }
  
  }
  