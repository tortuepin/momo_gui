const sitesUrl = 'http://127.0.0.1:8000/sitelist'
const contentsUrl = 'http://127.0.0.1:8000/imagelist'
const pagesUrl = 'http://127.0.0.1:8000/pagelist'


export function fetchContents(){
  return fetch(contentsUrl)
  .then(function(response) {
    let ret = response.json()
    return ret
  })
}

export function fetchSites(){
  return fetch(sitesUrl)
  .then(function(response) {
    let ret = response.json()
    return ret
  })
}

export function fetchPages(site, page=null){
  let url
  if(page){
    url = pagesUrl + "/" + site + "?page=" + page
  }else{
    url = pagesUrl + "/" + site
  }
  return fetch(url)
  .then(function(response){
    let ret = response.json()
    return ret
  })
}
