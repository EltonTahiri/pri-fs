import React, { useState } from "react";
import styled from "styled-components";
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobApplication = () => {

    const [job, setJob] = useState("Cleaner");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [additionalInfo, setAdditionalInfo] = useState("");
    const [cv, setCV] = useState(null);


    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!job || !name || !email) {
          // Display an error toast if any required field is empty
          toast.error('Please fill out all required fields.');
          return;
        }

        console.log(e.target);
    
        // Use the EmailJS service to send the email
        emailjs
          .sendForm('service_yqdboc8', 'template_9fnk2nn', e.target, '_zIANZK3lXT555wuw')
          .then((result) => {
            // Display a success toast when the email is sent successfully
            toast.success('Email sent successfully');
            console.log('Email sent successfully', result);
          })
          .catch((error) => {
            // Display an error toast if there's an issue with email sending
            toast.error('Email error. Please try again.');
            console.error('Email error:', error);
          });
      };



  return (
    <Container>
      <div className="left">
        <h1>
          Welcome to our <br /> Job Center
        </h1>
        <p>Please choose the work you're interested and fill the application</p>
      </div>
      <div className="right">
        <h2>Application Form</h2>
        <form onSubmit={handleSubmit}>
        <select onChange={(e) => setJob(e.target.value)} value={job}>
          <option>Cleaner</option>
        </select>
        <input type="text" placeholder="Enter Your Full Name..." value={name} name= "from_name" onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Enter Your Email Address..." value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder="Any additional information (optional)..." value={additionalInfo} onChange={(e) => setAdditionalInfo(e.target.value)} />
        <div>
          <label>CV</label>
          <input className="file-input" type="file" onChange={(e) => setCV(e.target.files[0])} />
        </div>
        <button type="submit">SUBMIT</button>
      </form>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 7em 4%;
  display: flex;
  justify-content: center;
  gap: 2em;
  .left {
    margin-top: 4em;
    h1 {
      font-size: 3.7em;
      color: var(--primaryColor);
    }
  }
  .right {
    h2 {
      text-align: center;
      font-weight: 400;
    }
    form {
      width: 500px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      height: 480px;
      padding: 30px;
      select {
        width: 100%;
        border-radius: 20px;
        border: 2px solid transparent;
        padding: 14px 20px;
        font-family: "Poppins", sans-serif;
        outline: none;
        box-shadow: 7px 7px 12px #b3b3b3, -4px -4px 12px white;
        font-size: 16px;
        color: var(--fontSecondaryColor);
      }
      input {
        margin-top: 12px;
        border-radius: 20px;
        border: 2px solid transparent;
        padding: 14px 20px;
        font-family: "Poppins", sans-serif;
        outline: none;
        font-size: 16px;
        width: 100%;
        background: transparent;
        box-shadow: 7px 7px 12px #b3b3b3, -4px -4px 12px white;
        color: var(--fontSecondaryColor);
      }
      div {
        width: 100%;
        display: flex;
        margin: 10px;
        display: flex;
        align-items: center;
        gap: 10px;
        justify-content: center;
        label {
          margin-top: 10px;
        }
        .file-input {
          padding: 4px;
          width: 70%;
          box-shadow: 0 0 0;
        }
      }
      button {
        margin-top: 1em;
        font-size: 18px;
        background: var(--fontPrimaryColor);
        color: var(--primaryBackgroundColor);
        border: none;
        padding: 10px 12px;
        cursor: pointer;
        transition: 0.4s;
        :hover {
          box-shadow: 0 0 10px 3px gray;
        }
      }
    }
  }
  @media (max-width: 1120px) {
    gap: 1em;
    .left {
      h1 {
        font-size: 3em;
      }
    }
  }
  @media (max-width: 1000px) {
    gap: 1em;
    .right {
      form {
        width: 400px;
      }
    }
  }
  @media (max-width: 880px) {
    padding: 3em 4%;
    gap: 3em;
    flex-direction: column;
    align-items: center;
    .left {
      text-align: center;
    }
    .right {
      form {
        max-width: 700px;
      }
    }
  }
  @media (max-width: 440px) {
    padding: 4em 2%;
    .left {
      h1 {
        font-size: 2em;
      }
    }
    .right {
      form {
        width: 100%;
        padding: 10px;
      }
    }
  }
`;
export default JobApplication;