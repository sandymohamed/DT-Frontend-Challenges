
// show/hide vertical nav bar 
const toggleMenu = () => {
  const menu = document.getElementById('menu-icon')
  const nav = document.getElementById('vertical-nav')
  nav.classList.toggle('active')
  menu.classList.toggle('active-menu-icon')

}


// create assets cards 
const addCardsElements = (data) => {

  var container = document.getElementById('task-container')

  data.map((item, i) => {

    container.innerHTML += `
        <div class="task-card" id='task ${i + 1}'>
        <div class="card-headding">
            <p>${item.asset_title} </p> 
        </div>

        <div class="card-body">
          <div class="asset">
              
            ${item.display_asset_image ? (` <img src=${item.display_asset_image} />`) : ''}

            ${item.display_asset_url ? (`<iframe  src=${item.display_asset_url} >
            </iframe>`) : ''}

            ${item.display_asset_video ? (`<iframe 
            src=  ${item.display_asset_video} >
            </iframe>`) : ''}

            ${item.display_asset_docs ? (`<iframe  src=${item.display_asset_docs} >
            </iframe>`) : (`<p><span>description </span> : ${item.asset_description} </p> `)}

          </div>

        <div class="more" id="more">
            <p> <span>content </span> : ${item.asset_content} </p> 
            <p> <span>id </span> : ${item.asset_id} </p> 
            <p> <span>type </span> : ${item.asset_type} </p> 
            <p> <span>description </span> : ${item.asset_description} </p> 
        </div>
    <hr>
       </div>
       
        <div class="card-footer">
            
            <div class="arrow" id="arrow" onClick="seeMore(${i})">
                <i class="fa-solid fa-arrow-down"></i>
            </div>
        </div>
    </div>
        `
  })
}


// fetch data from json file
const fetchData = async () => {
  fetch('./data.json')
    .then((response) => response.json())
    .then((data) => addCardsElements(data.tasks[0].assets))
    .catch(error => console.log('Request failed', error))
}

window.onload = fetchData();

//see more button
const seeMore = (i) => {
  const more = document.getElementsByClassName('more')
  more[i].classList.toggle('more-active')

}
