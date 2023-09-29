const React = require('react');


class Index extends React.Component {
    render(){
        const logs  = this.props.logs;
        // console.log(logs + "Look HERE")
        // console.log(logs._id)
        // console.log(logs)
        return (
            <div>
               <h1> INDEX</h1>
               <ul>
               {logs.map((oneLog,i) => {
                  return <li key={i}>
                    <div>
                      <a href={`/logs/${logs.id}`}>Title: {oneLog.title} </a>
                      <p>Entry: {oneLog.entry} ID: M000{oneLog.id}</p>
                       { oneLog.shipIsBroken? <span> Ship is Broken</span>: <span>  Ship is Not Broken? </span>}  

                 <form 
                
                  action={`/logs/${logs.id}?_method=DELETE`} method="POST"><input type="submit" value="DELETE"/>
                  </form>  
                 <a href={`/logs/${logs.id}/edit`}>Edit This Log</a>  <br/>  <br/>
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