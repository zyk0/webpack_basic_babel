var React = require("react");
var ReactDOM = require("react-dom");
var conscons = require("./constant.js");
var modmod  = require("./modmod.js");

class AppView extends React.Component {
    render() {
	console.log(conscons);
        return (<div>
           			 <p>require: <b>{conscons}</b></p>
					 <p>require: <i>{modmod}</i></p>
    			</div>);
  		}
};
 
ReactDOM.render(
  <div>
    <AppView />
  </div>,
  document.getElementById("container")
);