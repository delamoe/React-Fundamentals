/*
*
// no error, but glyphicon did not load
import React from 'react';
class App extends React.Component {
  render() {
    return <Button>I <Heart/> React</Button>
  }
}

class Button extends React.Component {
  render() {
    return <button>{this.props.children}</button>

  }
}

const Heart = () => <span className="glyphicon glyphicon-heart"></span>


export default App

*
*/

/*
*
// slider components
import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      red: 0,
      green: 0,
      blue: 0
    }
    this.update = this.update.bind(this)
  }
  update(e){
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
    })
  }
  render() {
    return (
      <div>
        <Slider ref="red" update={this.update} />
        {this.state.red}
        <br />
        <Slider ref="green" update={this.update} />
        {this.state.green}
        <br />
        <Slider ref="blue" update={this.update} />
        {this.state.blue}
        </div>
      );
    }
  }

class Slider extends React.Component {
  render() {
    return (
      <div>
      <input ref="inp" type="range"
        min="0"
        max="255"
        onChange={this.props.update} />
        </div>
    );
  }
}

export default App
*
*/

/*
*
//real time text update
import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = { txt: '' }
    this.update = this.update.bind(this)
  }

  update(e){
    this.setState({txt: e.target.value})
  }
  render() {
    return (
      <div>
      <Widget txt={this.state.txt} update={this.update} />
      <Widget txt={this.state.txt} update={this.update} />
      <Widget txt={this.state.txt} update={this.update} />
      <Widget txt={this.state.txt} update={this.update} />
    </div>
  );
  }
}

const Widget = (props) => {
  return (
    <div>
    <input type="text"
    onChange={props.update} />
    <h1>{props.txt}</h1>
  </div>
);
}


export default App
*
*/


/*
*
import React from 'react';
import ReactDOM from 'react-dom';

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: 'this is the default txt'
}
ReactDOM.render(
  <App cat={8}/>,
  document.getElementById('app')
);


export default App
*
*/
