import aboutData from "./aboutData";
export default function handler(req, res) {

    const{AboutUs}=aboutData;

    if(AboutUs) return res.status(200).json(AboutUs)
    return res.status(400).json({error:"Data not Found"})
  }
  