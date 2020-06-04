export function foo(): (n: number) => (m: number) => string {
    return function(n) {
            return function(m) { 
                return String(n+m)
            }
    }
}

export const foo = 
    (): (n: number) => (m: number) => string => 
        (n) => 
            (m) => 
                String(n+m)

export const bar: 
() => (n: number) => string = 
    () => 
        (n) => 
            String(n)

type Buz = () => (n: number) => string 

export const buz: Buz = 
    () => 
        (n) => 
            String(n)
