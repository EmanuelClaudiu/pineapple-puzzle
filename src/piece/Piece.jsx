import './Piece.css';
import {useContext} from "react";
import {AppContext} from "../contexts/AppContext";
import {PuzzleContext} from "../contexts/PuzzleContext";

const Piece = ({id, backgroundImage}) => {

    const [appState, setAppState] = useContext(AppContext);
    const [pieces, setPieces] = useContext(PuzzleContext);

    const handleClick = () => {
        if (!appState.complete) {
            if (appState.changingFrom === null) {
                setAppState(currentState => {
                    return {...currentState, changingFrom: {id: id, backgroundImage: backgroundImage}}
                });
            } else {
                setPieces(currentPieces => {
                    return [...currentPieces].map(piece => {
                        if (piece.id === id) {
                            return {...piece, id: piece.id, backgroundImage: appState.changingFrom.backgroundImage}
                        } else {
                            if (piece.id === appState.changingFrom.id) {
                                return {...piece, id: piece.id, backgroundImage: backgroundImage}
                            }
                            return {
                                ...piece, id: piece.id,
                                backgroundImage: piece.id === appState.changingFrom.id ? backgroundImage : piece.backgroundImage
                            }
                        }
                    });
                });
                setAppState(currentState => {
                    return {...currentState, changingFrom: null}
                });
            }
            if (checkCompletion()) {
                setAppState(currentState => {
                    return {...currentState, complete: true}
                });
            }
        }
    }

    const checkCompletion = () => {
        const filtered = pieces.filter(piece => piece.id !== piece.backgroundImage);
        return filtered.length === 0;
    }

    return(
        <div className={`imageContainer${appState.changingFrom && appState.changingFrom.id === id ? ' hollow' : ''}`} onClick={handleClick}>
            <img src={require(`../assets/${backgroundImage}.png`)} alt={'Cocktails?'}/>
        </div>
    );
}

export default Piece;