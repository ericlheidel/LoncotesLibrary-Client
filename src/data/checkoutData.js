const _apiUrl = "/api/checkouts"

export const getOverdueCheckouts = () => {
  return fetch(`${_apiUrl}/overdue`).then((res) => res.json())
}
