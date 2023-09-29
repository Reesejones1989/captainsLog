const React = require('react');
// As you can see we are using the app layout

class Edit extends React.Component{
  render() {
    const logs = this.props.logs;
    return (<div>
        {/* <h1>Log Edit</h1>
          <form action={`/logs/${logs.id}?_method=PUT`} method="POST"> 


          Title: <input type="text" name="Title" defaultValue={logs.title}/><br/>
          Entry: <input type="text" name="Entry"  defaultValue={logs.entry}/><br/>
          Is Ship Broken:
              {logs.shipIsBroken}? <input type="checkbox" name="shipIsBroken" defaultChecked />: <input type="checkbox" name="shipIsBroken"/> 
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form> EDIT PAGE */}
      </div>)
//    <div>EDIT PAGE</div> )
  }
}

module.exports = Edit;