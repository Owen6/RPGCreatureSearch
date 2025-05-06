const creatureInfoURL = "https://rpg-creature-api.freecodecamp.rocks/api/creature/";

const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const creatureStatsSpans = document.querySelectorAll(".stat");
const creatureSpanMap = {};
let creatures = [];
let loaded = false;

//set creatureSpansMap so keys are id's instead of numbers for better accessibility.
creatureStatsSpans.forEach((span) => {
  if(span.id){
    creatureSpanMap[span.id] = span;
  }
})

window.onload = () => {
  searchBtn.addEventListener("click", searchCreatures);
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      console.log('test');
      searchCreatures();
    }
  });
}

const fetchData = async (input) => {
  try {
    const res = await fetch(`${creatureInfoURL}${input}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    alert("Creature not found");
  }
};

const clearStats = () => {
  Object.entries(creatureSpanMap).forEach(([id,span]) => {
    if(id === "types"){
      span.innerHTML = ``;
    }else{
      span.textContent = ``;
    }
  })
}

const loadData = async (data) => {
  creatureSpanMap["creature-name"].textContent = data.name.toUpperCase();
  creatureSpanMap["creature-id"].textContent = `#${data.id}`;
  creatureSpanMap["weight"].textContent = `${data.weight}`;
  creatureSpanMap["height"].textContent = `${data.height}`;
  data.types.forEach((type) => {
    creatureSpanMap["types"].innerHTML += `<div class="type ${type.name.toLowerCase()}">${type.name.toUpperCase()}</div>`;
  })
  data.stats.forEach((stat) => {
    creatureSpanMap[stat.name].textContent = stat.base_stat;
  })
}


const searchCreatures = async () => {
  clearStats();
  const data = await fetchData(searchInput.value);
  if(data) {
    loadData(data);
  }
}

