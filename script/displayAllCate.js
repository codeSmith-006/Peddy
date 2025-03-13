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


// fetching Fetch All Pets API

const allCategoryPets = async () => {

    try{

        // API link
        const response = await fetch("https://openapi.programming-hero.com/api/peddy/pets");

        // converting into object
        const data = await response.json()

        // calling displayCategory function with data parameter
        displayCategoryPets(data.pets);
    }
    catch(error){
        console.log("PROBLEM: ", error)
    }
} 


// displaying the category pets
const displayCategoryPets = (categories) => {
    
    // get the pet display container container
    const petDisplayContainer = document.getElementById("pet-display-container");

    // running a loop on categories
    for (let category of categories) {

        // create a container every time the loop runs
        const container = document.createElement("div");

        // adding html content in the container
        container.innerHTML = `
                            <div class="p-5 border-[1px] border-dark border-opacity-10 rounded-xl">

                        <!-- img -->
                        <img class="mt-5 mb-6 rounded-lg" src="${category.image}" alt="">

                        <!-- pet details -->
                        <div>

                            <!-- name -->
                            <h1 class="font-lato font-bold text-xl text-dark mb-2">${category.pet_name}</h1>


                            <!-- breed -->
                            <div class="flex gap-2 items-center">

                                <!-- icon -->
                                <img src="assets/breed-icon.png" alt="">

                                <!-- breed name -->
                                <p class="font-lato text-dark opacity-70">Breed: ${category.breed}</p>
                            </div>

                            <!-- Birth -->
                            <div class="flex gap-2 items-center">

                                <!-- icon -->
                                <img src="assets/birth-icon.png" alt="">

                                <!-- birth date -->
                                <p class="font-lato text-dark opacity-70">${category.date_of_birth}</p>
                            </div>

                            <!-- Gender -->
                            <div class="flex gap-2 items-center">

                                <!-- icon -->
                                <img src="assets/gender-icon.png" alt="">

                                <!-- gender -->
                                <p class="font-lato text-dark opacity-70">Gender: ${category.gender}</p>
                            </div>

                            <!-- price -->
                            <div class="flex gap-2 items-center mb-4">

                                <!-- icon -->
                                <img src="assets/price-icon.png" alt="">

                                <!-- breed name -->
                                <p class="font-lato text-dark opacity-70">Price : ${category.price}$</p>
                            </div>

                            <!-- border bottom -->
                            <img class="mb-4" src="assets/Line 1.png" alt="">



                        </div>

                        <!-- interactive button section -->
                        <section class="flex items-center gap-4">

                            <!-- like button -->
                            <button>
                                <img src="assets/like.png" alt="">
                            </button>

                            <!-- adopt button -->
                            <button
                                class="font-lato font-bold text-btn px-4 py-2 border-[1px] border-btn border-opacity-15 rounded-lg">
                                Adopt
                            </button>

                            <!-- details button -->
                            <button
                                class="font-lato font-bold text-btn px-4 py-2 border-[1px] border-btn border-opacity-15 rounded-lg">
                                Details
                            </button>
                        </section>


                    </div>
        `

        // every time the loop runs, this container will append
        petDisplayContainer.appendChild(container);

    }
}

allCategoryPets()