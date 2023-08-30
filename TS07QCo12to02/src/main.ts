// Change typeof key from string to literal type.
/* interface Income {
    [key: string]: number
} */

// Error: typeof key cannot be literal type
/* interface Income {
    [key: "salary" | "bonus" | "sidehustle"]: number
} */

type Streams = "salary" | "bonus" | "sidehustle"

type Incomes = Record<Streams, number>