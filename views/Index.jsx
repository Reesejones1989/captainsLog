const React = require('react');
const border = {
    border: "1px solid black",
    textAlign: "center"
}
const center = {
    textAlign:"center"
}


class Index extends React.Component {
    render(){
        const logs  = this.props.logs;
        // console.log(logs + "Look HERE")
        // console.log(logs._id)
        // console.log(logs)
        return (
            <div style={center}>
               <h1> INDEX</h1>
               <ul>
               {logs.map((oneLog,i) => {
                  return <li style={border} key={i}>
                    <div>
                      <a href={`/logs/${oneLog.id}`}>Title: {oneLog.title} </a>
                      <p>Entry: {oneLog.entry} 
                      ID: {oneLog.id}
                      </p>
                       { oneLog.shipIsBroken? <span> Ship is Broken</span>: <span>  Ship is Not Broken </span>}  

                 <form 
                
                  action={`/logs/${oneLog._id}?_method=DELETE`} method="POST"><input type="submit" value="DELETE"/>
                  </form>  
                 <a href={`/logs/${oneLog._id}/edit`}>Edit This Log</a>  <br/>  <br/>
                 </div>
                {/* Not Working */}
                  </li>
              })} 
              
                </ul>
               <a href='/logs/new'>Create New Log</a>
            </div>
        )
    }
}

module.exports = Index;