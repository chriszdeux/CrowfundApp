export const leftGenerator = () => {
  return Math.floor(Math.random() * 120) + 1
}

export const backedGenerator = (goal) => {
  return Math.floor(Math.random() * goal) + 1 
}
export const backersGenerator = () => {
  return Math.floor(Math.random() * 6000) + 1 
}

export const leftDaysGenerator = () => {
  return Math.floor(Math.random() * 100) + 1 
}


