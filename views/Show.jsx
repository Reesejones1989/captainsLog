const React = require('react')

class Show extends React.Component {
   render () {
    const logs = this.props.logs
    console.log(logs + "Look HERE")
    return (
      <div>
       
        <h1>Show Page</h1>
         {logs.title}
       

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