import React from 'react';
import {TableHead} from '../../shared/constant';
import Player from '../Player/Player';
import {IPlayer} from '../../interface/types';
interface ITableScoreType {
    data: IPlayer[]
}

const TableScore = ({data}:ITableScoreType) => {
    return (
       <div className=' overflow-y-scroll h-[75vh] overflow-y-hidden'   >
           <table className="table-auto w-full" >
               <thead className='sticky top-0 w-full bg-purple-500'>
               <tr className=' w-full bg-black text-white'>
                   <th className='px-2.5 py-1.5 w-[30px]'>{TableHead.number}</th>
                   <th className='text-left' >{TableHead.name}</th>
                   <th className='text-left' >{TableHead.scores}</th>
                   <th className='text-left' >{TableHead.status}</th>
               </tr>
               </thead>
               <tbody className=' cursor-pointer w-full'
               >
               {
                   data.map((item, idx)=>{
                       return  <Player key={item._id} user={item} num={++idx}/>
                   })
               }
               </tbody>
           </table>
       </div>
    );
};

export default TableScore;
