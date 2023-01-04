class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    setInterval(() => this.setState({ date: new Date() }), 1000);
  }

  render() {
    return (
      <div>
        <h2>
          Il est {this.state.date.toLocaleTimeString('fr-FR', { timeZone: this.props.timezone })} à{' '}
          {this.props.timezone.split('/')[1]}
        </h2>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Clock timezone="Europe/Paris" />
        <Clock timezone="Asia/Tokyo" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
