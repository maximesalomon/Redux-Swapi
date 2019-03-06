import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { fetchChar } from "../actions";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchChar();
  }

  render() {
    if (this.props.fetching) {
      return (<p>Loading...</p>)
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    loading: state.charsReducer.loading,
  }
}

export default connect(
  mapStateToProps,
  {
    fetchChar
  }
)(CharacterListView);
