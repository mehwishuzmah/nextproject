import data from "../data";
export default function handler(req, res) {
    
  // take id from the url when user enters 1 ,2 3...
    const{postId}=req.query;
    // take complete data of array posts from the data 
    const {Posts}=data;
  // agr post id enter krta hai koi to 

    if(postId) {
      // poori Posts wly data mei se find kry or match kry us query k sath 
      const post=Posts.find(value=>value.id==postId)
      return res.status(200).json(post)
    }

  return res.status(400).json({error:"Post not Found"})
  }
   