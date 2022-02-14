export const deposit = depositAmount => {
  console.log("deposit", depositAmount)
  return {
    type: "balance/deposit",
    payload: depositAmount
  }
}