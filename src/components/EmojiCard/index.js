// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmojiItem} = props
  const {emojiUrl, emojiName, id} = emojiDetails
  // console.log(emojiName)
  //  <p>{id}</p>
  const onClickEmoji = () => {
    onClickEmojiItem(id)
  }

  return (
    <li className="emoji-card-item-container">
      <button type="button" className="li-item-button" onClick={onClickEmoji}>
        <img className="emoji-logo" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
