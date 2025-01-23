import React, { useState } from 'react'
import Wrapper from './style'
import HomeList from './Homelist'

const Home = ({user}) => {

    const [index, setIndex] = useState(1)
    const [tabs, setTabs] = useState([{
        id : 1,
        title : "Home"
    },{
        id : 2,
        title : "LO"
    },{
        id : 3,
        title : "AC"
    },{
        id : 4,
        title : "Students"
    }])

  return (
    <Wrapper>
        <div className="screen">
            {
                index === 1
                ? <HomeList user={user} setIndex={setIndex} />
                : (index === 2
                    ? "LO List"
                    : (index === 3
                        ? "AC List"
                        : "Students"
                    )
                )
            }
        </div>
        <div className="bottom">
            {
                tabs.map(tab => <input className={index === tab.id ? 'active' : ''} type="button" value={tab.title} onClick={e => setIndex(tab.id)} />)
            }
        </div>
    </Wrapper>
  )
}

export default Home
