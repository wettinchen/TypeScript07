// Index Signatures
/* interface TransactionObj {
    readonly [index: string]: number
} */

// Required properties combined with an index signature
interface TransactionObj {
    readonly [index: string]: number
    Pizza: number
    Books: number
    Job: number
}

const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    // Job: 50,
    Dave: 42
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

console.log(todaysTransactions["Dave"])