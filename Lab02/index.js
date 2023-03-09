import React from 'react'
import ReactDOM from 'react-dom'


function Button(props){
    return  <div class="button">
                <div class="icon">
                    <i class={`fa fa-${ props.firstName}`}></i>
                </div>
                <span>{ props.firstName }</span>
            </div>
}

class App extends React.Component {
    
    render(){
        const socialMedia = ["instagram", "facebook", "twitter", "linkedin","youtube", "github"]
        return(
            <div class="wrapper">
            {socialMedia.map((name, index) => {
                return (
                    <React.Fragment key={index}>
                        <Button firstName={name} />
                    </React.Fragment>
                )
            })}
            </div>
        )
    }
}

const rootNode = document.getElementById('root')
ReactDOM.render(<App />, rootNode)