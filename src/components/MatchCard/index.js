// Write your code here
import './index.css'

const MatchCard = props => {
  const {eachItem} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = eachItem
  const redOrGreen = matchStatus === 'Won' ? 'green' : 'red'
  return (
    <li className="list1">
      <div className="matches">
        <img
          className="img"
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
        />
        <p>{competingTeam}</p>
        <p className="result">{result}</p>
        <p className={redOrGreen}>{matchStatus}</p>
      </div>
    </li>
  )
}

export default MatchCard
