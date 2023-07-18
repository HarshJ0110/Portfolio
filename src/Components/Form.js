import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./FormStyles.css"

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2lx5ecx', 'template_0tjbad5', form.current, 'r2l2joUfYeL51bAs_')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (

    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="to_name" required />
        <label>Email</label>
        <input type="email" name="from_name" required />
        <label>Message</label>
        <textarea name="message" required />
        <input className="btn" type="submit" value="Send" />
      </form>
    </div>
  )
}

export default Form