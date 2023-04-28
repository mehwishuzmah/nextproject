import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import Layout from "../../layout/Layout";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import BannerComp from "../../components/BannerComp";
import Input from "../../components/child/Input";
import { useState } from "react";

export default function contact() {
  const [inputs,setInputs]=useState({
    fullname:"",
    email:"",
    msg:"",
    subject:"",

  });
  const onsubmit=(event)=>{
    event.preventDefault();
  //   const{fullname,email,subject,msg}= inputs;
  //   const data={fullname,email,subject,msg};
  //  fetch('http://localhost:3000/api/contactApi',{
  //   method:'POST',
  //   Headers:{
  //     'Content-Type':'application/json',

  //   },
  //   body:JSON.stringify(data),

  //  })
  //  .then (response=> response.text)
  //  .then(data=>{
  //   console.log('Success:',data);
  //   alert("Thanks For Submitting");
  //  })
  //  .catch((error)=>{
  //   console.log('Error:',error)
  //  });
  alert(`your response has been Submitted \nThanks For Contacting ${inputs.fullname}`)
  }

  const inputEvent=(e)=>{
  
    const inputName=e.target.name;
   const  inputValue=e.target.value;
   console.log(e.target.value);
   console.log(inputName);
   

    setInputs((preValue)=>{
     
      return{
        ...preValue,
      
        [inputName]: inputValue,
      }
    })

  }
  return (
    <Layout>
      <BannerComp title="Contact US"></BannerComp>

      <section className="content-section  ">
        <div className="container" >
          <div className="row">
            <div className="col-12 col-md-12 col-lg-8 mx-auto border p-0">
              <div className="form_wrapper rounded">
                <div className="row p-5">
                  <div className="col-12 col-md-6 col-lg-6 ">
                    <h1 className="main-title  pb-3">Contact</h1>
                    <p className="card-text text-secondary fw-bold">
                      Fill up the form below to Contact
                    </p>
                    <div className="contact-icons py-4">
                      <ul>
                        <li>
                          <span>
                            <MdPhone size={30}></MdPhone>
                          </span>
                          <span className="card-text">+121-322378-002</span>
                        </li>
                        <li className="">
                          <span>
                            <MdEmail size={30}></MdEmail>
                          </span>
                          <span className="card-text">info@gmail.com</span>
                        </li>
                        <li className="">
                          <span>
                            <MdLocationOn size={30}></MdLocationOn>
                          </span>
                          <span className="card-text">Pakistan</span>
                        </li>
                      </ul>
                    </div>
                    <div className="social-icons ">
                      <ul className="d-flex  align-baseline">
                        <li>
                          {" "}
                          <span>
                            <BsGithub size={30}></BsGithub>
                          </span>
                        </li>
                        <li>
                          {" "}
                          <BsDiscord size={30}></BsDiscord>
                        </li>
                        <li>
                          {" "}
                          <span>
                            <BsPerson size={30}></BsPerson>
                          </span>
                        </li>
                      </ul>

                      <span></span>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-6">
                    <div className="form-box bg-white  p-4">
                    <form action="/api/contactApi" method="post" onSubmit={onsubmit}>
                    <div className="mb-4">
                    <input
                          type="text"
                          className="form-control"
                          name="fullname"
                          value={inputs.fullname}
                          onChange={inputEvent}
                          placeholder="Enter Name"
                          required
                        
                        />
                        </div>
                        <div className="mb-4">
                    <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={inputs.email}
                          onChange={inputEvent}
                          placeholder="Enter Email"
                          required
                        
                        />
                        </div>
                        <div className="mb-4">
                    <input
                          type="text"
                          className="form-control"
                          name="subject"
                          value={inputs.subject}
                          onChange={inputEvent}
                          placeholder="Enter Subject of Message"
                          required
                        
                        />
                        </div>
                      <div className="mb-4">
                        <label
                          htmlFor="exampleFormControlTextarea1"
                          className="form-label"
                        >
                         Your Message
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          name="msg"
                          onChange={inputEvent}
                          value={inputs.msg}
                          required
                        ></textarea>
                      </div>
                      <div className="mb-4 text-center">
                        <button type="submit" className="btn mybtn ">
                          Submit
                        </button>
                      </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
