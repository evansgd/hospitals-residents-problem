import HR from './algorithm.js'
import fs from 'fs'

const content = fs.readFileSync('example.json', 'utf8')
const data = JSON.parse(content)

const hrInstance = new HR({
    residents: data.residents,
    hospitals: data.hospitals,
    capacities: data.capacities,
})

// eslint-disable-next-line no-console
console.log(hrInstance.run())
