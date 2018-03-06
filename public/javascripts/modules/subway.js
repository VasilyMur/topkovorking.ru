const rawStations = require('../../data/stations');
import dompurify from 'dompurify';


function findMatches(wordsToMatch, stations) {
    return stations.filter(station => {
        const regex = new RegExp(wordsToMatch, 'gi');
        return station.Name.match(regex);
    });
}

function searchResultsHtml(stations) {
    return stations.map(station => {
        return `
        
            <li class="subway__result">
                ${station.Name}
            </li>
        `
    }).join('');

}




function subway(searchInput) {

    if(!searchInput) return;


        

        const searchResults = document.querySelector('.search__results--subway');
    
        searchInput.addEventListener('input', function() {
  
            if (!this.value) {
                searchResults.style.display = 'none';
                return;
            }
    
            searchResults.style.display = 'block';
    
            const matchArray = findMatches(this.value, rawStations);
            const html = searchResultsHtml(matchArray);
            
            searchResults.innerHTML = dompurify.sanitize(html);
    
    
            const subwayResults = document.querySelectorAll('.subway__result')
            subwayResults.forEach(result => {
    
                result.addEventListener('click', function() {
                    searchInput.value = this.innerText;
                    searchResults.innerHTML = dompurify.sanitize('');
                    return;
                });
    
            });
        });
    
    
        //Handle Keyboard Inputs
        searchInput.addEventListener('keyup', (e) => {
            const search = document.querySelector('.search__subway')
            
            if(![38, 40, 13].includes(e.keyCode)) {
                return;
            }
      
    
            const activeClass = 'search__subway--active';
            const current = search.querySelector(`.${activeClass}`);
    
            const items = search.querySelectorAll('.subway__result');
     
            
            let next;
    
    
    
            if (e.keyCode === 40 && current) {
                next = current.nextElementSibling || items[0];
              } else if (e.keyCode === 40) {
                next = items[0];
              } else if (e.keyCode === 38 && current) {
                next = current.previousElementSibling || items[items.length - 1];
              } else if (e.keyCode === 38) {
                next = items[items.length - 1];
              } else if (e.keyCode === 13 && current) {
                console.log(this.value)
                //searchInput.value = this.innerText;
                return;
              }
    
            if (current) {
                current.classList.remove(activeClass);
            }
    
            next.classList.add(activeClass);
    
        })
    
    

    

    

}


export default subway;

