// Write your code here.

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    emojiItemList: [],
    isGameWon: false,
    isGameLost: false,
  }

  onClickEmojiItem = id => {
    const {emojiItemList, score} = this.state
    const newEmojiItem = id

    if (emojiItemList.includes(newEmojiItem)) {
      console.log('Lost')
      this.setState({isGameLost: true})
    } else if (!emojiItemList.includes(newEmojiItem) && score === 11) {
      this.setState(prevState => ({
        emojiItemList: [...prevState.emojiItemList, newEmojiItem],
      }))
      this.setState({score: emojiItemList.length})
      this.setState({isGameWon: true})
    } else {
      this.setState(prevState => ({
        emojiItemList: [...prevState.emojiItemList, newEmojiItem],
      }))
      this.setState(prevState => ({score: prevState.score + 1}))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onClickPlayAgain = score => {
    const {topScore} = this.state

    if (score === 12) {
      this.setState({isGameWon: false})
    } else {
      this.setState({isGameLost: false})
    }

    if (score > topScore) {
      this.setState({topScore: score})
    }

    this.setState({emojiItemList: []})
    this.setState({score: 0})
  }

  render() {
    const {score, topScore, emojiItemList, isGameWon, isGameLost} = this.state
    const {emojisList} = this.props
    console.log(score)
    console.log(emojiItemList)
    const matchDetails = {
      score,
      topScore,
      isGameWon,
      isGameLost,
      emojisList,
      emojiItemList,
    }
    // console.log(matchDetails)
    const filteredEmojisList = this.shuffledEmojisList()

    return (
      <div className="app-container">
        <div className="navbar-container">
          <NavBar matchDetails={matchDetails} />
        </div>
        <div className="emoji-game-container">
          {!isGameWon && !isGameLost && (
            <ul className="emoji-card-container">
              {filteredEmojisList.map(eachEmoji => (
                <EmojiCard
                  key={eachEmoji.id}
                  emojiDetails={eachEmoji}
                  onClickEmojiItem={this.onClickEmojiItem}
                />
              ))}
            </ul>
          )}
          <div className="win-or-lost-container">
            {(isGameWon || isGameLost) && (
              <WinOrLoseCard
                matchDetails={matchDetails}
                onClickPlayAgain={this.onClickPlayAgain}
              />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default EmojiGame
