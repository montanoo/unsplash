export const selectCharacter = (character) => {
  return {
    type: 'CHARACTER_SELECTED',
    payload: character
  }
}