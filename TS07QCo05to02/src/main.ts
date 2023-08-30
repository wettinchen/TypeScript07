// Index Signatures
interface TransactionObj {
    Pizza: number
    Books: number
    Job: number
}

const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50
}

console.log(todaysTransactions.Pizza)
console.log(todaysTransactions["Pizza"])

// Mistake 1
let prop: string = "Pizza"
console.log(todaysTransactions[prop])