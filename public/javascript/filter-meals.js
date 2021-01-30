// Add event listeners and callback functions here for diet filter buttons

const buttons = document.querySelectorAll(".filter-button");

    for(let i=0; i<buttons.length; i++){
        buttons[i].addEventListener("click", e => {

            let buttonId = e.target.id
            // console.log(buttonId);
            buttonFilter(buttonId);
            // console.log("buttonclicked", e.target.innerText);
        })
    }

let renal =[...document.querySelectorAll('.renal')];
    renal.unshift('renal')

let diabetic =[...document.querySelectorAll('.diabetic')];
    diabetic.unshift('diabetic')

let FODMAP =[...document.querySelectorAll('.FODMAP')];
FODMAP.unshift('FODMAP')

let foodarray = [renal, diabetic, FODMAP]

function buttonFilter(foodPlan) {

    console.log(foodarray)
    let filterTerm;
    foodarray.map(i => {
        if (foodPlan === i[0]) {
            filterTerm = i;
        }
    })

    // const filteredMealsTitle = document.querySelector('.filtered-meals-title');
    // filteredMealsTitle.innerHTML = '';

    // let foodContainers = [...document.querySelectorAll(`.${foodPlan}`)];
    // console.log(foodContainers);
    const filteredContainer = document.querySelector('.filtered-list');
    filteredContainer.innerHTML = '';

    const currentContainers = document.querySelector('.meal-list');
    currentContainers.classList.add('hide');

    const [, ...dietMeals] = filterTerm;
    console.log(dietMeals);

    dietMeals.map(meal => {
        // filteredMealsTitle.innerHTML = `<h3>${foodPlan}</h3>`;
        filteredContainer.append(meal);
    })
}

