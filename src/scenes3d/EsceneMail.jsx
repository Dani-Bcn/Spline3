import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Canvas } from '@react-three/fiber';
import { Environment, Html, PerspectiveCamera } from '@react-three/drei';
import { Post3d } from '../components3D/Post3D';

const EmailForm = (props) => {
  const [toEmail, setToEmail] = useState('nneodani@gmail.com');
  const [message, setMessage] = useState('');
  const [activeAnimation, setActiveAnimation] = useState(false)

  const { handleClickEmail } = props
  const { activeEmail } = props

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_pmt6x0p',
      'template_5ngl75f',
      {
        to_email: toEmail,
        message: message
      },
      'XG2fdAmpzFMvweM3P'
    )/* 
      .then((response) => {
        console.log('Correo enviado correctamente', response.status, response.text);
      })
      .catch((error) => {
        console.error('Error al enviar el correo', error);
      }); */
    setToEmail('nneodani@gmail.com');
    setMessage('');
  };

  const closePage = (() => {
    handleClickEmail()
    !activeEmail
  })

  const onChange = ((e) => {
    setMessage(e.target.value)
    console.log(setMessage)

  })
  const funcSend=(()=>{
    setActiveAnimation(true)
  })

  return (
    <main className='ct-email'>
      <button className='btn-close'
        onClick={() => closePage()}
      >
        <h2>X</h2>
      </button>
      <h3
      >Write your message
      </h3>
      <form onSubmit={sendEmail}>
        <label>
          <textarea
            maxLength={250}
            value={message}
            onChange={(e) => onChange(e)}
          />
        </label>
        <br />
       
      </form>
      <button className="btn-submit"
        /*   type="submit" */
            onClick={()=> funcSend()}
          >
          Send
        </button>
      <section>
        <Canvas
          style={{
            top: 0,
            position: "absolute"
          }}
        >
          <Environment
            preset='city'
          />
          <pointLight

          />
          <PerspectiveCamera
            makeDefault
            fov={1}
            position={[5, 0, 200]}
          />
          <Post3d 
          activeAnimation={activeAnimation}
          setActiveAnimation={setActiveAnimation}
          />
        </Canvas>
      </section>
    </main>
  );
};

export default EmailForm;
