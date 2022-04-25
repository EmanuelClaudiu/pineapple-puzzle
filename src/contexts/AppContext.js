import {createContext, useState} from "react";
import {PuzzleProvider} from "./PuzzleContext";

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, setState] = useState({
        changingFrom: null,
        complete: false
    });

    return (
        <AppContext.Provider value={[state, setState]}>
            <PuzzleProvider>
                {props.children}
            </PuzzleProvider>
        </AppContext.Provider>
    );
}