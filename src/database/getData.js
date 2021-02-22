let backed = 100000;
let randomAmount;


const getRandomAmount = () => {
  return Math.floor( Math.random() * backed )
}

const dataBase = [
  {
    amount: getRandomAmount(),
    targetAmount: backed
  }
]