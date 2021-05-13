import React, { useEffect, useState } from 'react';
import teamData from '../../data.json'
import Cart from '../Add-Player/AddedPlayer';
import Header from '../Header/Header';
import Players from '../Players/Players';
import './Team.css';

const Team = () => {
    
    
    const [data, setData] = useState([])
    useEffect(() => {
        setData(teamData)
    }, [])

    // handleAddPlayer
    const [player, setPlayer] = useState([])
    const handleAddPlayer = (teammate) => {
        let c=0;
          for(let i=0;i<player.length;i++){
              if(player[i].jersey_number===teammate.jersey_number){
                     c++;
              }
            
          }
       
        if(c==0){
            const newPlayer = [...player, teammate]
            setPlayer(newPlayer)
        }
       
    }
    return (
        <div>
            <Header></Header>
            <div className="cricket-container">
                <div className="player-container">
                    {
                        data.map(data => <Players data={data} handleAddPlayer={handleAddPlayer} key={data.jersey_number}></Players>)
                    }
                </div>
                <div className="players-cart">
                    <Cart player={player}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Team;