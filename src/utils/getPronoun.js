function getPronoun (gender) {
  switch (gender) {
    case 'Male':
      return 'he'
    case 'Female':
      return 'she'
    default:
      return 'it'
  }
}

export default getPronoun
