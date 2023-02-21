import './App.css'
import { Scoreboard } from './pages'
import React, {useEffect, useState} from 'react'
import {IPlayer} from './interface/types';
import {Loader} from './shared/components';

const App: React.FC = () => {
    const [players, setPlayers] = useState<IPlayer[]>()
    useEffect(()=>{
        fetch('https://scoreboardback-production.up.railway.app/api/players')
            .then(res=> res.json())
            .then(data=> setPlayers(data))
    },[])

  return (
    <div className='w-full main flex justify-center h-screen'>
        {players ? <Scoreboard data={players}/> : <Loader/>}
    </div>
  )
}

export default App
