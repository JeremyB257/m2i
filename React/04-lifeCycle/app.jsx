class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    setInterval(() => this.setState({ date: new Date() }), 1000);
  }

  componentDidMount() {}

  render() {
    return <h1>{this.state.date.toLocaleTimeString()}</h1>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { display: false };
  }

  display() {
    this.setState({ display: !this.state.display });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.display()}>Cacher</button>
        {this.state.display && <Clock />}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
