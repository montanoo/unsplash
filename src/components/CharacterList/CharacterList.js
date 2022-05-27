import React from 'react';
import { connect } from 'react-redux';
import { selectCharacter } from '../../actions';

class CharacterList extends React.Component {

  renderList() {
    return this.props.characters.map((character) => {
      return (
        <div className="item" key={character.id}>
          <div className="right floated contect">
            <button className="ui button primary" onClick={() => {
              this.props.selectCharacter(character)
            }}>
              Select Character
            </button>
          </div>
          <div className="content">
            {character.characterName}
          </div>
        </div>
      )
    })
  }

  render () {
    console.log(this.props)
    return (
      <div className="ui divided list">{this.renderList()}</div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    characters: state.characters
  }
}

export default connect(mapStateToProps, {
  selectCharacter
})( CharacterList );
