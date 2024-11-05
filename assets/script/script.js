//data to filter
const furnitureData = [
    {
      title: "Vintage Single Sofa 2024",
      image: "sofa.png",
      category: "sofa",
    },
    {
      title: "Vintage Single Sofa 2024",
      image: "sofa.png",
      category: "sofa",
    },
    {
      title: "Vintage Single Sofa 2024",
      image: "sofa.png",
      category: "sofa",
    },
    {
      title: "Vintage Single Sofa 2024",
      image: "sofa.png",
      category: "sofa",
    },
    {
      title: "Vintage Single Sofa 2024",
      image: "sofa.png",
      category: "sofa",
    },
    {
      title: "Vintage Single Sofa 2024",
      image: "sofa.png",
      category: "sofa",
    },
    {
      title: "Vintage Single Sofa 2024",
      image: "sofa.png",
      category: "sofa",
    },
    {
      title: "Vintage Single Sofa 2024",
      image: "sofa.png",
      category: "sofa",
    },
    {
      title: "Vintage Single Table 2024",
      image: "table.png",
      category: "table",
    },
    {
      title: "Vintage Single Table 2024",
      image: "table.png",
      category: "table",
    },
    {
      title: "Vintage Single Table 2024",
      image: "table.png",
      category: "table",
    },
    {
      title: "Vintage Single Table 2024",
      image: "table.png",
      category: "table",
    },
    {
      title: "Vintage Single Chair 2024",
      image: "chair.png",
      category: "chair",
    },
    {
      title: "Vintage Single Chair 2024",
      image: "chair.png",
      category: "chair",
    },
    {
      title: "Vintage Single Chair 2024",
      image: "chair.png",
      category: "chair",
    },
    {
      title: "Vintage Single Chair 2024",
      image: "chair.png",
      category: "chair",
    },
    {
      title: "Vintage Single Accesories 2024",
      image: "accessories.png",
      category: "accessories",
    },
    {
      title: "Vintage Single Accesories 2024",
      image: "chair.png",
      category: "accessories",
    },
    {
      title: "Vintage Single Accesories 2024",
      image: "accessories.png",
      category: "accessories",
    },
    {
      title: "Vintage Single Accesories 2024",
      image: "table.png",
      category: "accessories",
    },
  ];
// function for furniture count up
function startCountUpOne(targetNumber) {
  let currentNumber = 1;
  const counterElement = document.getElementById("furniture");
  const interval = setInterval(() => {
    counterElement.innerText = currentNumber;
    currentNumber++;
    //clean up function
    if (currentNumber > targetNumber) {
      clearInterval(interval);
    }
  }, 80);
}
// function for furniture decor count up
function startCountUpTwo(targetNumber) {
  let currentNumber = 1;
  const counterElement = document.getElementById("decor");
  const interval = setInterval(() => {
    counterElement.innerText = currentNumber;
    currentNumber++;
    //clean up function
    if (currentNumber > targetNumber) {
      clearInterval(interval);
    }
  }, 200);
}
//function for finishes count up
function startCountUpThree(targetNumber) {
  let currentNumber = 1;
  const counterElement = document.getElementById("finishes");
  const interval = setInterval(() => {
    counterElement.innerText = currentNumber;
    currentNumber++;
    //clean up function
    if (currentNumber > targetNumber) {
      clearInterval(interval);
    }
  }, 5);
}
//funtion to start up couter when that section comes in screen
function startAllCounters() {
  startCountUpOne(50);
  startCountUpTwo(20);
  startCountUpThree(800);
}

// Set up IntersectionObserver to watch for the section visibility
const counterSection = document.getElementById("counter-section");
const observerOptions = {
  threshold: 0.5, // Trigger when 50% of the section is in view
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      startAllCounters();
      observer.unobserve(counterSection); // Stop observing after counters start
    }
  });
}, observerOptions);

observer.observe(counterSection);
//   funtion for image slider
//   to get the button and container
let scrollcontainer = document.querySelector(".image-slider-container");
let backBtn = document.getElementById("backbtn");
let nextBtn = document.getElementById("nextbtn");
//   function for scroll effect on Image slider
scrollcontainer.addEventListener("wheel", (e) => {
  e.preventDefault();
  scrollcontainer.scrollLeft += e.deltaY;
});
//fuction for left button to load one image
nextBtn.addEventListener("click", () => {
  scrollcontainer.style.scrollBehavior = "smooth";
  scrollcontainer.scrollLeft += 1300 / 4;
});
//fuction for right button to load one image
backBtn.addEventListener("click", () => {
  scrollcontainer.style.scrollBehavior = "smooth";
  scrollcontainer.scrollLeft -= 1300 / 4;
});

//filter image function
const filter = (filterName) => {
    //getting element
  const container = document.getElementById("filteredDataConatiner");
  const sofaBtn = document.getElementById("sofa");
  const tableBtn = document.getElementById("table");
  const chairBtn = document.getElementById("chair");
  const accessoriesBtn = document.getElementById("accessories");
  const allBtn = document.getElementById("allBtn");
  const buttons = [
    { name: "sofa", element: sofaBtn },
    { name: "table", element: tableBtn },
    { name: "chair", element: chairBtn },
    { name: "accessories", element: accessoriesBtn }
  ];
  //dynamic active class
  buttons.forEach(button => button.element.classList.remove("active"));
  const activeButton = buttons.find(button => button.name === filterName);
  if (activeButton) {
    activeButton.element.classList.add("active");
  }
  //filtering data
  container.innerHTML = "";
  let filteredData;
  if (filterName === "all") {
    filteredData = furnitureData; 
    allBtn.classList.add('hidden')
  } else {
    filteredData = furnitureData.filter(
      (furniture) => furniture.category === filterName
    );
    allBtn.classList.remove('hidden')
  }
  //appending data
  filteredData.forEach((data) => {
    //console.log(data);
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
            <div>
              <img src="./assets/image/${data.image}" alt="" />
            </div>
            <h3 class="card-title">${data.title}</h3>
            <p class="card-price">Tk 18,500</p>
          `;
    container.appendChild(div);
  });
};
filter("sofa");
