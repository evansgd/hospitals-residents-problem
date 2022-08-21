/* eslint-disable no-undef */
import HR from '../algorithm.js'
import { expect } from 'chai'

describe('Hospitals-Residents Algorithm', function () {
    it('should return a matching', () => {
        const residents = {
            r1: ['h2', 'h1'],
            r2: ['h2', 'h1'],
            r3: ['h1', 'h2'],
        }

        const capacities = {
            h1: {
                capacity: 2,
            },
            h2: {
                capacity: 1,
            },
        }

        const hospitals = {
            h1: ['r3', 'r2', 'r1'],
            h2: ['r1', 'r3', 'r2'],
        }

        const hrInstance = new HR({
            residents,
            hospitals,
            capacities,
        })

        const matching = hrInstance.run()
        expect([...matching]).to.eql([
            ['r1', 'h2'],
            ['r2', 'h2'],
            ['r3', 'h1'],
        ])
    })
})
