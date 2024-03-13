import React, {useState} from 'react'
import styles from "@/styles/contact.module.css";

const Contact = () => {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [desc, setdesc] = useState('')
  const handleEvent=(e)=>{
    e.preventDefault();
    const formData = {
      name: name,
      email: email,
      phone: phone,
      concern: desc,
    };
    fetch("http://localhost:3000/api/postcontact", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(newUserData => {
        console.log('New User Data:', newUserData);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  const handleChange=(e)=>{
   if(e.target.id=="name")
   {
      setname(e.target.value);
   }
   else if(e.target.id=="phone")
   {
      setphone(e.target.value);
   }
   else if(e.target.id=="email")
   {
      setemail(e.target.value);
   }
   else if(e.target.id=="description")
   {
      setdesc(e.target.value);
   }
  }
  return (
    <main className={styles.container}>
    <style jsx>
      {
        `
        .heading
        {
          color:red;
          margin: 20px 0px;
        }
        `
      }
    </style>
    <h1 className='heading'>Contact Us</h1>
    <form onSubmit={handleEvent}>
    <div className={styles.toenter}><label className={styles.inputtext} htmlFor='name'>Enter Your Name:  </label>
        <input onChange={handleChange} className={styles.inputter} type='text' name='name' id='name' placeholder='Enter your name'></input></div>
        <div className={styles.toenter}> <label className={styles.inputtext} htmlFor='email'>Enter Your email:  </label>
        <input  onChange={handleChange} className={styles.inputter} type='email' name='email' id='email' placeholder='Enter your Email'></input></div>
        <div className={styles.toenter}> <label className={styles.inputtext} htmlFor='phone'>Enter Your Phone:  </label>
        <input onChange={handleChange} className={styles.inputter} type='text' name='phone' id='phone' placeholder='Enter your phone'></input></div>
        <div className={styles.toenter}> <label className={styles.inputtext} htmlFor='description'>Enter your concerns:  </label>
        <textarea onChange={handleChange} className={styles.inputter} name="desc" id="description" placeholder="Enter your Concerns here: ">
        </textarea> </div>
        <div className={styles.toenter}>
          <input type='submit' className={styles.btn} value="submit"></input>
        </div>
    </form>
    </main>
  )
}

export default Contact