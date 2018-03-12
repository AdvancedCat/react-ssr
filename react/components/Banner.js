import React from 'react'

class Banner extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <img src={require('../img/tryme.png')}/>
            </div>
        )
    }
}

export default Banner