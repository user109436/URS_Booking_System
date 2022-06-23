export class Table {
    static search(state, data) {
        var result = []

        for (var i = 0; i < state.length; i++) {
            for (var key in state[i]) {
                if (state[i][key] == data) {
                    result.push(state[i])
                }
            }
        }

        return result
    }

    static select(state, key, data) {
        // return state.map(value => value[key] == data)

        var result = []

        for (var i = 0; i < state.length; i++) {
            if (state[i][key] == data) {
                result.push(state[i])
            }
        }

        return result
    }

}