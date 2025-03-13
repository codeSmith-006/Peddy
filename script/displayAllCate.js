// creating a scroll Animation function
const scrollToBestFriend = () => {
    document.getElementById('adopt-section').scrollIntoView({ behavior: 'smooth' });
}


// fetching Fetch All Pet Categories API

const allCategory = async () => {

    try{

        // API link
        const response = await fetch("https://openapi.programming-hero.com/api/peddy/categories");

        // converting into object
        const data = await response.json()

        // calling displayCategory function with data parameter
        displayCategory(data.categories);
    }
    catch(error){
        console.log("PROBLEM: ", error)
    }
} 


// displaying the category
const displayCategory = (categories) => {
    
    // get the category container
    const categoryContainer = document.getElementById("category-container");

    // running a loop on datas
    for (let category of categories) {

        // create a container everytime the loop runs
        const container = document.createElement("div");

        // adding html content in the container
        container.innerHTML = `
                        <div class="flex items-center gap-4 px-20 border-[1px] border-btn border-opacity-15 rounded-2xl py-6">

                    <!-- icon -->
                    <img src="${category.category_icon}" alt="">

                    <!-- pet name -->
                    <h2 class="font-lato font-bold text-2xl text-left text-dark">${category.category}</h2>
                </div>
        `

        // every time the loop runs, this container will append
        categoryContainer.appendChild(container);

    }
}

// calling the allCategory function
allCategory();