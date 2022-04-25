import Piece from "../piece/Piece";
import './Puzzle.css';
import {useContext, useEffect} from "react";
import {PuzzleContext} from "../contexts/PuzzleContext";

const Puzzle = () => {

    const [pieces, setPieces] = useContext(PuzzleContext);

    useEffect(() => {
        // shuffle pieces
        let unshuffled = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let shuffled = unshuffled
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
        setPieces([...pieces].map(piece => {
            return {...piece, id: piece.id, backgroundImage: shuffled[piece.id - 1] }
        }));
    }, []);

    return (
        <div className={'puzzleContainer'}>
            {pieces && pieces.map((piece, id) => <Piece key={id} id={piece.id} backgroundImage={piece.backgroundImage}/>)}
        </div>
    );
}

export default Puzzle;