export type Merge<T, K> = {
  [P in keyof (T & K)]: P extends keyof (T | K) ? K[P] : (T & K)[P]
}
