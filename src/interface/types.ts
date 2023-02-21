export interface IFriends {
    id: number,
    name: string
}
export interface IPlayer {
    nickname: string,
    _id: number,
    kill: number,
    death: number,
    support: number,
    denied: number,
    friends: IFriends[],
    score: number,
    isDead: boolean,
    team: number,
    picture: string
}
