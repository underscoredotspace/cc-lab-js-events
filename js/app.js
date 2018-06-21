document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form')
  form.addEventListener('click', function(e) {
    e.preventDefault()
    console.log('form submitted')
  })

  const deleteAll = document.querySelector('#delete-all')

  deleteAll.addEventListener('click', function(e) {
    console.log('delete all clicked')
  })

})
