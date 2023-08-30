// typeof value can be number or string type
/* interface Income {
    [key: string]: number | string
} */

type Streams = "salary" | "bonus" | "sidehustle"

type Incomes = Record<Streams, number | string>