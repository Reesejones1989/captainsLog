const React = require('react')
const border = {
    border: "1px solid black",
    textAlign: "center"
}
const center = {
    textAlign:"center"
}

class Show extends React.Component {
   render () {
    const logs = this.props.logs
    const oneLog = this.props.oneLog
    console.log(logs + "Look HERE")
    return (
      <div>
       
        <h1>Log: {logs.title}</h1>
        

         <h2>Entry: {logs.entry}</h2>

        <h4>{logs.shipIsBroken? `Ship Broken` : `Ship not Broken`} </h4>
         
       

        <h3>
        <nav>
        <a href="/logs/">Back to Home</a>
        </nav>
        </h3>
      </div>

      
     );
    }
 }
 module.exports  = Show;