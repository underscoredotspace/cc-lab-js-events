document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form')
  form.addEventListener('submit', function(e) {
    e.preventDefault()
    console.log('form submitted')

    const title = e.target.title.value
    const author = e.target.author.value
    const category = e.target.category.value

    const readingList = document.querySelector('#reading-list')

    const readingListItem = document.createElement('p')
    const itemTitle = document.createElement('h2')
    const itemAuthor = document.createElement('p')
    const itemCategory = document.createElement('p')

    itemTitle.textContent = title
    itemAuthor.textContent = author
    itemCategory.textContent = category

    readingListItem.appendChild(itemTitle)
    readingListItem.appendChild(itemAuthor)
    readingListItem.appendChild(itemCategory)

    readingList.appendChild(readingListItem)

    e.target.reset()
  })

  const deleteAll = document.querySelector('#delete-all')

  deleteAll.addEventListener('click', function(e) {
    console.log('delete all clicked')
  })

})
