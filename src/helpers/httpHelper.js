
export const loadImages = (searchQuery) => {
  const API_KEY = '18272080-de40a9a770eda28f1449e225c'
  const url =`https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=photo&pretty=true`
  return fetch(url)
  .then(response => {
    return response.json()
  })
  .catch(err => {
    console.log('===> loading images error: ', err)
    // throw new Error(`some error: ${err}`)
  })
}
