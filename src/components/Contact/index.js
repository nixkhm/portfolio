import './index.scss'
import Loader from 'react-loaders'
import { useEffect, useRef, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_qwrubee',
        'template_hckqtdf',
        refForm.current,
        'RydjNdCf553JwAPV5'
      )
      .then(
        () => {
          alert('Message successfully sent, thank you!')
          window.location.reload(false)
        },
        (error) => {
          alert('Message failed to send, please try again')
        }
      )
  }

  return (
    <>
      <div className="contact-page container">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['c', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              index={15}
            />
          </h1>
          <p>Contact me for more information</p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="send" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>

      <Loader type="ball-clip-rotate-multiple" />
    </>
  )
}

export default Contact
