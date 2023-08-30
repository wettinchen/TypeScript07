// Index Signatures
interface TransactionObj {
    [index: boolean]: number
}

// Pizza, Books, Job are unknown.
/* interface TransactionObj {
    Pizza: number
    Books: number
    Job: number
} */

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

// Mistake 2
const todaysNet = (transactions: TransactionObj): number => {
    let total = 0
    for (const transaction in transactions) {
        total += transactions[transaction]
    }
    return total
}