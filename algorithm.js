const head = ([h]) => h
const tail = (l) => l.slice(1)
const isEmpty = (l) => l.length === 0

export default class HR {
    constructor({ residents, hospitals, capacities }) {
        this.residents = residents
        this.hospitals = hospitals
        this.capacities = capacities
    }

    getWorst(hos, M) {
        const mr = [...M].filter(([, h]) => h === hos).map(([r]) => r)
        return this.hospitals[hos]
            .slice()
            .reverse()
            .find((x) => mr.includes(x))
    }

    getSuccessors(h, rk) {
        const indexOfRk = this.hospitals[h].indexOf(rk)
        return this.hospitals[h].slice(indexOfRk + 1)
    }

    updateState(state, r) {
        const ps = state[r]
        return {
            ...state,
            [r]: tail(ps),
        }
    }

    getNumberOfAssignments(hos, M) {
        return [...M].reduce((sum, [, h]) => {
            if (h === hos) {
                return sum + 1
            }
            return sum
        }, 0)
    }

    isOverSubscribed(h, M) {
        return this.getNumberOfAssignments(h, M) > this.capacities[h].capacity
    }

    isFull(h, M) {
        return this.getNumberOfAssignments(h, M) === this.capacities[h].capacity
    }

    getApplicant(state, M) {
        return (
            Object.entries(state).find(
                ([resident, ps]) =>
                    [...M].every(([r]) => r !== resident) && !isEmpty(ps)
            ) ?? [null, null]
        )
    }

    algorithm(state, M) {
        const [ri, ps] = this.getApplicant(state, M)
        if (!ri) {
            return M
        }

        const hj = head(ps)
        M.add([ri, hj])

        if (this.isOverSubscribed(hj, M)) {
            const rk = this.getWorst(hj, M)
            M = new Set([...M].filter((r, h) => !(r === rk && h === hj)))
        }

        if (this.isFull(hj, M)) {
            const rk = this.getWorst(hj, M)
            const successors = this.getSuccessors(hj, rk)
            M = new Set(
                [...M].filter((r, h) => !(successors.includes(r) && h === hj))
            )
        }
        return this.algorithm(this.updateState(state, ri), M)
    }

    run() {
        return this.algorithm(this.residents, new Set())
    }
}
