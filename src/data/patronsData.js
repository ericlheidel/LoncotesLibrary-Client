const _apiUrl = "/api/patrons"

export const getPatrons = () => {
  return fetch(_apiUrl).then((res) => res.json())
}

export const getPatronById = (id) => {
  return fetch(`${_apiUrl}/${id}`).then((res) => res.json())
}
