// Write your code here

import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <div className="latest-match-container1">
        <div>
          <p className="latest-match-h1">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="para">{venue}</p>
          <p className="para">{result}</p>
        </div>

        <img
          className="latest-match-img"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
      </div>

      <hr />

      <div className="match-details">
        <p className="para1">First Innings</p>
        <p className="para2">{firstInnings}</p>
        <p className="para1">Second Innings</p>
        <p className="para2">{secondInnings}</p>
        <p className="para1">Man Of The Match</p>
        <p className="para2">{manOfTheMatch}</p>
        <p className="para1">Umpires</p>
        <p className="para2">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
