import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Highscores extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchScores();
  }
  render() {
    if (this.props.dataService.scores.length === 0) {
      return (
        <div >
          <h1>
            Highscores component
        </h1>
        </div>
      );
    } else {
      const row = this.props.dataService.scores.map((data, index) =>
        <tr key={index}>
          <td key={data.player}>{data.player}</td>
          <td key={data.Time}>{data.Time}</td>
          <td key={data.score}>{data.score}</td>
        </tr>
      );
      return (
        <div>
          <table>
            <thead>
              <tr>
                <th>Player</th>
                <th>Time</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
            {row}
            </tbody>
          </table>
        </div>
      )
    }
  }
}

Highscores.propTypes = {
  pushPlays: React.PropTypes.func,
  computerPlays: React.PropTypes.array
};
