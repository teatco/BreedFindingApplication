const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:5001'

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'x-access-key': token
}

export const getAllDogsFriendlyCats = () =>
  fetch(`${api}/api/findBreeding`, { headers })
    .then(res => res.json())
    .then(data =>data.dogs)

export const getAllChildFriendlyCats = () =>
  fetch(`${api}/api/findBreeding`, { headers })
    .then(res => res.json())
    .then(data => data.children)

export const getAllStrangerFriendlyCats = () =>
    fetch(`${api}/api/findBreeding`, { headers })
      .then(res => res.json())
      .then(data => data.strangers)

