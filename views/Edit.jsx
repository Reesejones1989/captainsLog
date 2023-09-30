const React = require('react');
// As you can see we are using the app layout

class Edit extends React.Component{
  render() {
    const logs = this.props.logs;
    return (<div>
        <h1>Log Edit</h1>
          <form action={`/logs/${logs._id}?_method=PUT`} method="POST"> 


          Title: <input type="text" name="title" defaultValue={logs.title}/><br/>
          Entry: <input type="text" name="entry"  defaultValue={logs.entry}/><br/>
          Is Ship Broken:
              {logs.shipIsBroken}? <input type="checkbox" name="shipIsBroken" defaultChecked />
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form> 

      <a href='/logs'>Home </a>
      </div>)
//    <div>EDIT PAGE</div> )
  }
}

module.exports = Edit;