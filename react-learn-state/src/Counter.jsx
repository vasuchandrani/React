import { useState } from "react";

export default function Counter() {

    let [count, setState] = useState(0);


    let inCount = () => {
        setState(count +1);
    }

    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={inCount}>Increase</button>
        </div>
    );
}