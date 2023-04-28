import Image from "next/image"
import Link from "next/link"
const author = (props) => {
  return (
    <>
    <div>
     <div className="row py-3">
      <div className="col ">
        <div  className="d-flex">
        <Image  src={props.imagesrc} height={50} width={50} alt='Author' className="rounded-circle border "/>
       
        <div className='px-3'>
         <p className="mb-0 author_name ">{props.name}</p>
         <p className="author_post"><small  className="text-secondary">{props.desig}</small></p>
         </div>
       
       </div>
       </div>
     </div>
     </div>
    </>
  )
}

export default author
