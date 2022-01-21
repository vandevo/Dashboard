fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
  .then(response => response.json())
  .then(data => {
    console.log(data.urls.regular)
    document.body.style.backgroundImage = `url(${data.urls.regular})`
    let author = document.getElementById("author")
    author.textContent = `By ${data.user.name}`
    
    
  })
  .catch(err => {
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
)`
		document.getElementById("author").textContent = `By Dodi Achmad`
  
  })

  fetch("https://api.coingecko.com/api/v3/coins/dogecoins")
  .then(res => {
      if (!res.ok) {
        throw Error("Something went wrong") 
      }
      console.log(res.status)
      return res.json()
  })
  .then(data => {
      console.log(data)
  })
  .catch(err => console.error(err))