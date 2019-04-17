import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Movies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Movies: null,
    };
  }

  async componentDidMount() {
    const Movies = (await axios.get(`http://localhost:8081/api/${params.ActorName}`)).data;
    this.setState({
      Movies,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.Movies === null && <p>Loading Movies...</p>}
          {
            this.state.Movies && this.state.Movies.map(Movie => (
              <div key={Movie.id} className="col-sm-12 col-md-4 col-lg-3">
                <Link to={`/Movie/${Movie.id}`}>
                  <div className="card text-white bg-success mb-3">
                    <div className="card-header">descriptions: {Movie.descriptions}</div>
                    <div className="card-body">
                      <h4 className="card-title">{Movie.title}</h4>
                      <p className="card-text">{Movie.description}</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default Movies;