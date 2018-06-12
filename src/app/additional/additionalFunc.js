// Creating update info
export function wasUpdated (dateString) {
  const updatedAtMilisec = Date.parse(dateString)
  const todayMilisec = Date.now()
  let dayDiffirence = parseInt((todayMilisec - updatedAtMilisec) / (1000 * 60 * 60 * 24))
  let result = ''
  if (dayDiffirence > 1) {
    result = 'Updated ' + dayDiffirence.toString() + ' days ago'
    return result
  } else if (dayDiffirence === 1) {
    result = 'Updated a day ago'
    return result
  }
  result = 'Updated today'
  return result
}

// Creating stars info
export function showStars (stars) {
  let result = ''
  const starsAbsolute = stars % 1000
  if (stars < 1000) {
    result = stars.toString()
    return result
  } else if (starsAbsolute > 50 && starsAbsolute < 951) {
    let starsKilo = (stars / 1000).toFixed(1)
    result = starsKilo + 'k'
    return result
  } else if (starsAbsolute < 50 || starsAbsolute > 950) {
    let starsKilo = (stars / 1000).toFixed()
    result = starsKilo + 'k'
    return result
  }
}

// Creating issues info
export function showIssues (issues) {
  let result = 'No issues'
  if (issues > 1) {
    result = issues.toString() + ' issues need help'
    return result
  } else if (issues === 1) {
    result = '1 issue need help'
    return result
  }
  return result
}

// Creating license info
export function showLicense (license) {
  let result = ''
  if (!license) {
    result = 'No info'
    return result
  }
  result = license.name
  return result
}

// Loading the state from LocalStorage
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('bookmark')
    if (serializedState === null) {
      return { 'bookmarks': { name: '', list: {}, columns: [{ name: 'Collection', cards: [] }] } }
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

// Saving the state to LocalStorage
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('bookmark', serializedState)
  } catch (err) {
    // Ignore errors
  }
}
