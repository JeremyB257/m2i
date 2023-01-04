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
          Il est {this.state.date.toLocaleTimeString('fr-FR', { timeZone: this.props.timezone })}
          {this.props.timezone ? ' à ' + this.props.timezone.split('/')[1] : ' ici'}
        </h2>
      </div>
    );
  }
}

class AnimalList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.animals.map((animal, key) => (
          <li key={key}>{animal}</li>
        ))}
      </ul>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Clock timezone="Europe/Paris" />
        <Clock timezone="Asia/Tokyo" />
        <Clock />
        <AnimalList animals={['Chat', 'Chien', 'Oiseau']} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
