import styles from "./ChessBoard.module.css"

const board = [
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8]
]

export default function ChessBoard() {
    return (
        <div className={styles.chessBoard}>
            {board.map((row, i) => row.map(field => {
                return <div 
                key={`${row}-${field}-${i}`} 
                className={field % 2 === (i % 2) ? styles.black : styles.white}>     
                </div>
            }))
            }
        </div>
    )
}
