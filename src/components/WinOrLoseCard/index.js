// Write your code here.

import './index.css'

const WinOrLoseCard = props => {
  const {matchDetails, onClickPlayAgain} = props
  const {score, emojisList, isGameWon, isGameLost, emojiItemList} = matchDetails
  console.log(matchDetails)

  const title = isGameWon ? 'You Won' : 'You Lose'
  const wishes = isGameWon ? 'Best Score' : 'Score'
  const imageSource = isGameWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const onCLickPlayAgainButton = () => {
    onClickPlayAgain(emojiItemList.length)
  }

  return (
    <div className="emoji-game-won-lost-container">
      <div className="emoji-game-won-lost-content">
        <h1 className="title">{title}</h1>
        <p className="wish">{wishes}</p>
        {isGameWon && <p className="score">12/12</p>}
        {isGameLost && (
          <p className="score">
            {score}/{emojisList.length}
          </p>
        )}
        <button
          className="play-again-button"
          type="button"
          onClick={onCLickPlayAgainButton}
        >
          Play Again
        </button>
      </div>
      <img
        className="result-won-lost-image"
        src={imageSource}
        alt="win or lose"
      />
    </div>
  )
}

export default WinOrLoseCard
