import React ,{useEffect, useState , useRef} from "react";
import Footer from "../components/footer";
import emailjs from 'emailjs-com';
const Contact = () =>{
 let form = useRef();
  const [input, setInputs] = useState({
    name:"",
    email:"",
    subject:"",
    message:""
  })
  const [submit , setSubmit] = useState(false);
  const [errors , setErrors] = useState({});

  const changeInput = (e)  => {
    const {name , value} = e.target;
    setInputs({...input, [name]:value});
  }

  const submitData = (e) => {
    e.preventDefault();
    setErrors(validated(input));
    // const values = {...input}
     setSubmit(true);
    //  console.log(values);
  }

  useEffect (() => { 
    if(Object.keys(errors).length === 0 && submit){
        emailjs.sendForm('service_ih9k71g', 'template_4ekj18i', form.current, 'IO66mzq1cNxXFCbQ8')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setInputs({name:"",email:"",subject:"",message:""});
    }
  },[errors]);


  const validated = (values) =>{
     const error = {}
     const regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     if(!values.name){
       error.name = "please enter name";
     }
     if(!values.email){
       error.email = " please enter email address"
     } else if(!regx.test(values.email)){
       error.email = "please enter valid address"
     } 
     if(!values.subject){
       error.subject = "please enter subject"
     } 
     if(!values.message){
       error.message = "please enter message"
     }

     return error;
  }
      return(
      <>
   <div className="contact-page">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <div className="line-dec"></div>
              <h1>Contact Us</h1>
            </div>
          </div>
          <div className="col-md-6">
            <div id="map">
            	
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497699.9973874144!2d77.35074421903857!3d12.95384772557775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1654338772274!5m2!1sen!2sin" width="100%" height="500" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <div className="col-md-6">
            <div className="right-content">
              <div className="container">
                <form ref={form} id="contact" action="" onSubmit={submitData} method="post">
                  <div className="row">
                    <div className="col-md-6">
                      <fieldset>
                        <input name="name" type="text" className="form-control" value={input.name} id="name" placeholder="Your name..." required="" onChange={changeInput}/> 
                        <p>{errors.name}</p>
                      </fieldset>
                    </div>
                    <div className="col-md-6">
                      <fieldset>
                        <input name="email" type="email" className="form-control" value={input.email} id="email" placeholder="Your email..." required="" onChange={changeInput}/>
                        <p>{errors.email}</p>
                      </fieldset>
                    </div>
                    <div className="col-md-12">
                      <fieldset>
                        <input name="subject" type="text" className="form-control" value={input.subject} id="subject" placeholder="Subject..." required="" onChange={changeInput}/>
                        <p>{errors.subject}</p>
                      </fieldset>
                    </div>
                    <div className="col-md-12">
                      <fieldset>
                        <textarea name="message" rows="6" className="form-control" value={input.message} id="message" placeholder="Your message..." required="" onChange={changeInput}></textarea>
                        <p>{errors.message}</p>
                      </fieldset>
                    </div>
                    <div className="col-md-12">
                      <fieldset>
                        <button type="submit" id="form-submit" className="button">Send Message</button>
                      </fieldset>
                      {Object.keys(errors).length === 0 && submit ? (<p> Sent sucessfully </p>) : null}
                    </div>
                    <div className="col-md-12">
                      <div className="share">
                        <h6>You can also keep in touch on: <span><a href="#"><i className="fa fa-facebook"></i></a><a href="#"><i className="fa fa-linkedin"></i></a><a href="#"><i className="fa fa-twitter"></i></a></span></h6>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>)
}

export default Contact;