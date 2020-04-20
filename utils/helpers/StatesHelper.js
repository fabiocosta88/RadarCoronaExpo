export const formatStatesResponse = (list) => {
    const states = [];
    list.map((stat) => {
        return states.push({
            value: stat.state,
        });
    });
    const sorted = states;
    sorted.push({
        value: 'Geral',
    })
    return sorted;
};

function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const stateA = a.value.toUpperCase();
    const stateB = b.value.toUpperCase();

    let comparison = 0;
    if (stateA > stateB) {
      comparison = 1;
    } else if (stateA < stateB) {
      comparison = -1;
    }
    return comparison;
  }
