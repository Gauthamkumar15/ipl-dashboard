// Write your code here
import Loader from 'react-loader-spinner'

import './index.css'

import {Component} from 'react'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    iplTeam: {
      teamBannerUrl: '',
      latestMatchDetails: {},
      recentMatches: [],
    },
    isLoad: true,
    id: '',
  }

  componentDidMount() {
    this.team()
  }

  team = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const recentList = data.recent_matches.map(eachItem => ({
      umpires: eachItem.umpires,
      result: eachItem.result,
      manOfTheMatch: eachItem.man_of_the_match,
      id: eachItem.id,
      date: eachItem.date,
      venue: eachItem.venue,
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      firstInnings: eachItem.first_innings,
      secondInnings: eachItem.second_innings,
      matchStatus: eachItem.match_status,
    }))

    const updatedIplTeam = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },

      recentMatches: recentList,
    }

    this.setState({iplTeam: updatedIplTeam, isLoad: false, id})
  }

  render() {
    const {iplTeam, isLoad, id} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = iplTeam
    let bgClass
    console.log(id)

    switch (id) {
      case 'RCB':
        bgClass = 'team-container-RCB'
        break
      case 'CSK':
        bgClass = 'team-container-CSK'
        break
      case 'RR':
        bgClass = 'team-container-RR'
        break
      case 'MI':
        bgClass = 'team-container-MI'
        break
      case 'SH':
        bgClass = 'team-container-SRH'
        break
      case 'DC':
        bgClass = 'team-container-DC'
        break
      case 'KXP':
        bgClass = 'team-container-PBK'
        break
      case 'KKR':
        bgClass = 'team-container-KKR'
        break
      default:
        bgClass = ''
    }

    return (
      <div className={bgClass}>
        {isLoad && (
          <div className="load" testid="loader">
            <Loader type="Oval" color="#000000" height={50} width={50} />
          </div>
        )}

        {!isLoad && (
          <>
            <div className="team-banner">
              <img className="banner" src={teamBannerUrl} alt="team banner" />
            </div>
            <p>Latest Matches</p>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul className="teammatches-ul">
              {recentMatches.map(eachItem => (
                <MatchCard key={eachItem.id} eachItem={eachItem} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}
export default TeamMatches
