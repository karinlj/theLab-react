
import React from 'react'

/* function Sidebar(props) {
    return <h1>Hello, {props.heading}</h1>;
  } */

/*  class Sidebar extends Component {
    render() {
      return <h1>Hello, {this.props.heading}</h1>;
    }
  } */


//functional/stateless component
/* function Sidebar(props) {
}
*/
const Sidebar = props => {

    const heading = props.heading;
    const text = props.text;

    return (
        <div className="sidebar-section" >
            <h4>{heading}</h4>
            <p>{text}</p>
        </div>
    )
}

export default Sidebar