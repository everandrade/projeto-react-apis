
export const backgroundCard = (type) => {
  switch (type) {
    case 'grass':
      return '#729F92'
    case 'poison':
      return '#AD61AE'
    case 'fire':
      return '#EAAB7D'
    case 'flying':
      return '#6892B0'
    case 'water':
      return '#004170'
    case 'bug':
      return '#76A866'
    case 'normal':
      return '#BF9762'
      default:
        return '#8A8A8A'
  }
}

export const backgroundType = (type) => {
  switch (type) {
    case 'grass':
      return '#70B873'
    case 'poison':
      return '#AD61AE'
    case 'fire':
      return '#F44900'
    case 'flying':
      return '#6892B0'
    case 'water':
      return '#33A4F5'
    case 'bug':
      return '#316520'
    case 'normal':
      return '#8A8A8A'
      default:
        return '#8A8A8A'
  }
}