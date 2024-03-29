import { useEffect, useState } from 'react'
import {
  faJava,
  faCss3,
  faPython,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['a', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              index={15}
            />
          </h1>
          <p className="bio">
            Hello, and thank you for visiting my site!
            <br></br>I enjoy coding and discovering new technologies in my spare
            time
            <br></br>As of May 2024, I will have completed my Bachelor of
            Science, Computer Science at St. John's University
            <br></br>Most recently, I was a Software Engineer Intern at
            EverBright Solar during a internship in Summer 2023.
            <br></br>I'm a huge Evertonian and love watching soccer on weekends
            <br></br>I am looking to challenge myself to step outside of my
            comfort zone and familiarize myself with approaching obstacles
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#f89820" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faPython} color="#FBCB24" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-clip-rotate-multiple" />
    </>
  )
}

export default About
