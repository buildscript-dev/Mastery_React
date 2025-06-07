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
import SummonBeastExport from '../Practice/Props/MediumProps'
import DisplayEvent from '../Concept/4.Event'
import DisplayName from '../Concept/5.ConditionalRendering'
import ListRendering from '../Concept/6.List'
import FavoriteColor from '../Concept/Hooks/7.Hook'
import ChakraCounter from '../Concept/Hooks/8.useState'
import ChakraTracker from '../Practice/UseState/EasyLevel'
import ChakraColor from '../Practice/UseState/MediumLevel'
import Timer from '../Concept/Hooks/9.useEffect'

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
{/* <SummonBeastExport/> */}
{/* <DisplayEvent/> */}
{/* <DisplayName/> */}
{/* <ListRendering/> */}
{/* <FavoriteColor/> */}
{/* <ChakraTracker/> */}
{/* <ChakraColor/> */}
<Timer/>
    </>
  )
}

export default App
