// Write your code here

import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {eachItem} = props
  const {name, id, teamImageUrl} = eachItem
  return (
    <li className="list">
      <Link className="li" to={`/team-matches/${id}`}>
        <img className="teamcard-img" src={teamImageUrl} alt={name} />
        <p>{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
