import React, {Component} from 'react';
import axios from 'axios';

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Movie: null,
    };
  }

  async componentDidMount() {
    const { match: { params } } = this.props;
    const Movie = (await axios.get(`http://localhost:8081/${params.MovieId}`)).data;
    this.setState({
      Movie,
    });
  }

  render() {
    const {Movie} = this.state;
    if (Movie === null) return <p>Loading ...</p>;
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron col-12">
            <h1 className="display-3">{Movie.title}</h1>
            <p className="lead">{Movie.description}</p>
            <hr className="my-4" />
            <p>descriptions:</p>
            {
              Movie.descriptions.map((description, idx) => (
                <p className="lead" key={idx}>{description.description}</p>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Movie;