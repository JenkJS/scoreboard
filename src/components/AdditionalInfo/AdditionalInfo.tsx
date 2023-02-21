import React from 'react'
import { TableHead } from '../../shared/constant'
import { IPlayer } from '../../interface/types'

interface AdditionalInfoType {
  player: IPlayer
}
const AdditionalInfo: React.FC<AdditionalInfoType> = ({ player }) => {
  return (
    <table className='table-auto mb-5'>
      <thead>
        <tr className='w-full text-white'>
          <th className='px-2.5 py-1.5 w-[30px]'>{TableHead.kills}</th>
          <th className='px-2.5 py-1.5 w-[30px]'>{TableHead.death}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='text-center'>{player.kill}</td>
          <td className='text-center'>{player.death}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default AdditionalInfo
