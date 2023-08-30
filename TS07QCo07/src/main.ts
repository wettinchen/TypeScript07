// Index Signatures
interface TransactionObj {
    readonly [index: string]: number
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

let prop: string = "Pizza"
console.log(todaysTransactions[prop])

const todaysNet = (transactions: TransactionObj): number => {
    let total = 0
    for (const transaction in transactions) {
        total += transactions[transaction]
    }
    return total
}