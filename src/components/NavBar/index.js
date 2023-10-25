// Write your code here.

import './index.css'

const NavBar = props => {
  const {matchDetails} = props
  const {topScore, isGameWon, isGameLost, emojiItemList} = matchDetails

  return (
    <nav className="navbar-subclass-container">
      <div className="image-title-container">
        <img
          className="navbar-logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="emoji-game-title">Emoji Game</h1>
      </div>
      {!isGameWon && !isGameLost && (
        <div className="score-container">
          <p className="score-display">Score: {emojiItemList.length}</p>
          <p className="top-score-display">Top Score: {topScore}</p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
