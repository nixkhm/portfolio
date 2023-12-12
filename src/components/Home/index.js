import LogoTitle from '../../assets/imgs/nlogo.png'
import { Link } from 'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['i', 'c', 'k']
  const positionArray = [
    's',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'e',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r',
  ]
  const studentArray = []

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 5000)
  }, [])

  return (
    <>
      <div className="homepage container">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>h</span>
            <span className={`${letterClass} _12`}>i</span>
            <br />
            <span className={`${letterClass} _13`}>i</span>
            <span className={`${letterClass} _13`}>'</span>
            <span className={`${letterClass} _14`}>m</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              index={15}
            />
            <span className={`${letterClass} _13`}>,</span>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={positionArray}
              index={19}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={studentArray}
              index={35}
            />
          </h1>
          <h2 style={{ fontSize: '20px' }}>new york, ny</h2>
          <Link to="/contact" className="flat-button">
            contact me
          </Link>
        </div>
      </div>

      <Loader type="ball-clip-rotate-multiple" />
    </>
  )
}

export default Home
