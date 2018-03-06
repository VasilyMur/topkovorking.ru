const rawStations = require('../../data/stations');
import axios from 'axios';
import dompurify from 'dompurify';


// const statColor = rawStations.map(station => {
//     console.log(station)
// })

function findMatches(wordsToMatch, stations) {
    return stations.filter(station => {
        const regex = new RegExp(wordsToMatch, 'gi');
        return station.Name.match(regex);
    });
}

function searchResultsHtml(stations) {
    return stations.map(station => {
        return `
        
            <li class="subway__result__front" type="checkbox">
            <span style="color: #${station.LineColor}">м.</span> ${station.Name}
            </li>
        `
    }).join('');

}


// MAIN
function subwayFront(searchInput) {
    
    if(!searchInput) return;

    const searchResults = document.querySelector('.search__subway__front--results');

    document.querySelector('.search__subway__front input[type="submit"]').addEventListener('click', function(e) {
        e.preventDefault();

        if (!searchInput.value) return;
        window.location = `/metro/${searchInput.value.toLowerCase()}`;
        return;

    })


    searchInput.addEventListener('input', function() {

        if (!this.value) {
            searchResults.style.display = 'none';
            return;
        }

        searchResults.style.display = 'block';

        const matchArray = findMatches(this.value, rawStations);
        const html = searchResultsHtml(matchArray);
            
        searchResults.innerHTML = dompurify.sanitize(html);

        const subwayResults = document.querySelectorAll('.subway__result__front');
        subwayResults.forEach(result => {

            result.addEventListener('click', function() {
                searchInput.value = this.innerText.replace(/м./g, '').trim();
                searchResults.innerHTML = dompurify.sanitize('');
                return;
            });

        });


 
    });



    //Handle Keyboard Inputs
    searchInput.addEventListener('keyup', (e) => {
  
        const search = document.querySelector('.search__subway__front')
        
        if(![38, 40, 13].includes(e.keyCode)) {
            return;
        }

        const activeClass = 'search__subway--active';
        const current = search.querySelector(`.${activeClass}`);

        const items = search.querySelectorAll('.subway__result__front');
 
        
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
            searchInput.value = current.innerText.replace(/м./g, '').trim();
            //searchInput.value = current.innerHTML.trim();
            searchResults.style.display = 'none';
            return;

          }


        if (current) {
            current.classList.remove(activeClass);
        }

        next.classList.add(activeClass);

    });



}
    



export default subwayFront;