import 'dotenv/config'
import { sum } from './lib/sum'

console.log(`ENV=${process.env.ENV}`)
console.log(`sum(1+2)=${sum(1, 2)}`)
