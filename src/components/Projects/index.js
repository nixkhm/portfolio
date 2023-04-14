import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'
import pacman from '../../assets/imgs/Pacman.png'
import sorting from '../../assets/imgs/Sorting.png'
import port from '../../assets/imgs/port.png'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <>
        <div className="container project-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['p', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                index={15}
              ></AnimatedLetters>
            </h1>

            <p>Here are some of the projects that I have developed</p>
          </div>
          <div className="projects">
            <ul className="row2">
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://nixkhm.github.io/Pacman-Clone/"
                >
                  <img
                    src={pacman}
                    alt="Pac Man Game clone, developed by Nicholas Masters"
                  />
                </a>
              </li>
            </ul>

            <ul className="row1">
              <li>
                <a target="_blank" rel="noreferrer" href="/">
                  <img
                    src={port}
                    alt="Portfolio Website, developed by Nicholas Masters"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </>

      <Loader type="ball-clip-rotate-multiple" />
    </>
  )
}

export default Projects
