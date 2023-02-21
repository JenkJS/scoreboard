import React, {FC} from 'react'
import { IPlayer } from '../../interface/types'
import AdditionalInfo from '../AdditionalInfo/AdditionalInfo'
import { Button } from '../../shared/components'
import { Tooltip } from 'react-tooltip'

interface IPlayerType {
  user: IPlayer
  num: number
}

const Player: React.FC<IPlayerType> = ({ user, num }) => {
  const style = 'px-2.5 py-1.5 font-bold text-13'
  return (
    <>
      <tr
        data-tooltip-id='tooltip'
        data-tooltip-position-strategy='fixed'
        data-tooltip-place={user.team === 1 ? 'left' : 'right'}
        className={`${user.isDead ? 'bg-gray-500' : 'bg-emerald-500'} bg-opacity-70 text-white`}
      >
        <td className={style}>{num}</td>
        <td className={style}>{user.nickname}</td>
        <td className={style}>{user.score}</td>
        <td className={style}>{user.isDead ? 'DEAD' : 'ALIVE'}</td>
      </tr>
      <Tooltip id='tooltip' clickable className='z-999 flex-col'>
        <AdditionalInfo player={user} />
        <Button title='Add Friends' onClick={() => console.log('add')} />
      </Tooltip>
    </>
  )
}

export default Player
