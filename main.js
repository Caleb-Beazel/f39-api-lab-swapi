let residentsButton = document.querySelector('button')
let peepsDiv = document.querySelector('#people')

function Button(){
    getResidents()
}



const getResidents = () => {
    axios.get("https://swapi.dev/api/planets?search=alderaan")
    .then(res => {
        let urlArray = res.data.results[0].residents

        for (let i=0; i<urlArray.length; i++){
            let residentURL = urlArray[i]
            axios.get(residentURL)
            .then((res2) => {
                const newPersonPara = document.createElement('p')
                newPersonPara.innerHTML = res2.data.name
                peepsDiv.appendChild(newPersonPara)
            })
        }
    })
    .catch(() => {

    })
}

residentsButton.addEventListener('click', getResidents)