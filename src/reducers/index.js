import { combineReducers } from 'redux';

const charactersReducer = () => {
  return [
    {characterName: 'Leia Organa', playedBy: 'Carrie Fisher', id: 1},
    {characterName: 'Luke Skywalker', playedBy: 'Mike Hamill', id: 2},  
    {characterName: 'C-3PO', playedBy: 'Anthony Daniels', id: 3},
    {characterName: 'R2-D2', playedBy: 'Kenny Baker', id: 4},
    {characterName: 'Chewbacca', playedBy: 'Peter Mayhew', id: 5},
  ]
}

const selectedCharacterReducer = (selectedCharacter = null, action) => {
  switch(action.type) {
    case 'CHARACTER_SELECTED': {
      return action.payload
    }
    default: {
      return selectedCharacter
    }
  }
}

export default combineReducers({
  characters: charactersReducer,
  selectedCharacter: selectedCharacterReducer
})
