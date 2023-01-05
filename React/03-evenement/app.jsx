class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggle: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('click');
    this.setState({ isToggle: !this.state.isToggle });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>click ({this.state.isToggle ? 'Ouvert' : 'Fermé'})</button>
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
