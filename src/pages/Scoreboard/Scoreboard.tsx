import React from 'react'
import { TeamWin } from '../../data/players'
import { TableScore } from '../../components'
import {IPlayer} from "../../interface/types";

interface IScoreProps {
    data: IPlayer[]
}

const Scoreboard:React.FC<IScoreProps> = ({data}) => {
  return (
   <div className='w-full flex flex-col items-center '>
       <div className='flex w-full justify-center text-white font-black text-8xl mb-10'>Scoreboard</div>
       <div className='flex container justify-center items-baseline'>
           <div className='w-full mr-10'>
               <div className='flex justify-between'>
                   <span className='text-7xl text-white font-black'>Winner</span>
                   <span className='text-7xl text-white font-black'>35</span>
               </div>
               <TableScore data={data.filter((el) => el.team === 1)} />
           </div>
           <div className='w-full'>
               <div className='flex justify-between'>
                   <span className='text-7xl text-white font-black'>Lose</span>
                   <span className='text-7xl text-white font-black'>25</span>
               </div>
               <TableScore data={data.filter((el) => el.team === 2)} />
           </div>
       </div>
   </div>
  )
}
export default Scoreboard
