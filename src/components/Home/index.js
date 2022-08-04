// Write your code here
import './index.css'

import Loader from 'react-loader-spinner'

import {Component} from 'react'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {iplTeams: [], isLoad: true}

  componentDidMount = () => {
    this.iplTeams()
  }

  iplTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedList = data.teams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))

    this.setState({iplTeams: updatedList, isLoad: false})
  }

  render() {
    const {iplTeams, isLoad} = this.state
    return (
      <div className="bg-container">
        {isLoad && (
          <div className="loader" testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        )}
        {!isLoad && (
          <>
            <div className="logo">
              <img
                className="logo-image"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
              />
              <h1>IPL Dashboard</h1>
            </div>

            <ul className="home-ul">
              {iplTeams.map(eachItem => (
                <TeamCard key={eachItem.id} eachItem={eachItem} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default Home
