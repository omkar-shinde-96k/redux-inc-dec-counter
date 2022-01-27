
const changeTheNumber = (state = 0, action) => {
    switch (action.type) {


        case 'INCREMENTBY': {
            let num = Number(action.payload)
            console.log(action);
            return state + num;
        }
        case 'DECREMENTBY': {
            let num = Number(action.payload)
            console.log(action);
            return state - num;
        }

        case 'INCREMENT': {
            return state + 1;
        }

        case 'DECREMENT': {
            if (state > 0) {
                return state - 1;
            }
        };

        case 'RESET': return 0;

        default: return state;
    }
}

export default changeTheNumber;