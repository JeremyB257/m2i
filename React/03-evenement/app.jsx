class Button extends React.Component {
  handleClick() {
    console.log('click');
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>click</button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Button />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
