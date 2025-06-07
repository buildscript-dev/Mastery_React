import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import JSX from '../Concept/1.JSX'
import DisplayProfile from '../Practice/JSX/FirstJSX'
import DisplayNumber from '../Practice/JSX/SecondJSX'
import DisplayCondition from '../Practice/JSX/ThirdJSX'
import Shinobi from '../Concept/2.Component'
import JutsuCard from '../Practice/Component/LevelOne'
import NinjaList from '../Practice/Component/LevelThree'
import Weapons from '../Concept/3.Props'
import Greeting from '../Concept/3.Props'
import SummonBeast from '../Practice/Props/MediumProps'

function App() {

  return (
    <>
      {/* <JSX/> */}
      {/* <DisplayProfile/> */}
      {/* <DisplayNumber/> */}
      {/* <DisplayCondition/> */}
      {/* <Shinobi name="Madara Uchiha"/> */}
      {/* <JutsuCard name= "Itachi Uchiha" type="Amatarasu" chakraCost="49"/> */}
{/* <NinjaList/> */}
{/* <Greeting name="Madara" title="Ghost of Uchiha"/> */}
{/* <Weapons/> */}
<SummonBeast name= "Gamabunta" summoner= "Jiraiya" powerLevel = "800" types = "water" isLegendary = "Yes"/>
    </>
  )
}

export default App
