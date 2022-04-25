import {createContext, useState} from "react";

export const PuzzleContext = createContext();

export const PuzzleProvider = (props) => {
    const [puzzle, setPuzzle] = useState([
        {
            id: 1,
            backgroundImage: 1
        },
        {
            id: 2,
            backgroundImage: 2
        },
        {
            id: 3,
            backgroundImage: 3
        },
        {
            id: 4,
            backgroundImage: 4
        },
        {
            id: 5,
            backgroundImage: 5
        },
        {
            id: 6,
            backgroundImage: 6
        },
        {
            id: 7,
            backgroundImage: 7
        },
        {
            id: 8,
            backgroundImage: 8
        },
        {
            id: 9,
            backgroundImage: 9
        }
    ]);

    return (
      <PuzzleContext.Provider value={[puzzle, setPuzzle]}>
          {props.children}
      </PuzzleContext.Provider>
    );
}