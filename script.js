//const validCreatureURL = "https://rpg-creature-api.freecodecamp.rocks/api/creatures";
//https://rpg-creature-api.freecodecamp.rocks/api/creature/{name-or-id}
const creatureInfoURL = "https://rpg-creature-api.freecodecamp.rocks/api/creature/";

const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const creatureStatsSpans = document.querySelectorAll(".stat");
const creatureSpanMap = {};
let creatures = [];
let loaded = false;


//console.log(creatureStatsSpans);

//set creatureSpansMap so keys are id's instead of numbers for better accessibility.
creatureStatsSpans.forEach((span) => {
  //console.log(span.id);
  //console.log(span.innerText);
  if(span.id){
    creatureSpanMap[span.id] = span;
  }
})

//console.log(creatureSpanMap)

window.onload = () => {
  //creatures = await fetchData();
  searchBtn.addEventListener("click", searchCreatures);
}

const fetchData = async (input) => {
  try {
    const res = await fetch(`${creatureInfoURL}${input}`);
    const data = await res.json();
    //console.log(data);
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
  
  //const data = await fetchData(`${creatureInfoURL}${obj.id}`);
  //console.log(data);

  creatureSpanMap["creature-name"].textContent = data.name.toUpperCase();
  creatureSpanMap["creature-id"].textContent = `#${data.id}`;
  creatureSpanMap["weight"].textContent = `Weight: ${data.weight}`;
  creatureSpanMap["height"].textContent = `Height: ${data.height}`;
  data.types.forEach((type) => {
    creatureSpanMap["types"].innerHTML += `<div>${type.name.toUpperCase()}</div>`;
  })
  data.stats.forEach((stat) => {
    creatureSpanMap[stat.name].textContent = stat.base_stat;
  })
}


const searchCreatures = async () => {
  clearStats();
  //const numInput = parseInt(input);

  const data = await fetchData(searchInput.value);
  if(data) {
    loadData(data);
  }
  /**
  let notFound = true;
  //only use of creatures
  for(const obj of creatures){
    if(searchInput.value === obj.name || parseInt(searchInput.value) === obj.id){
      notFound = false;
      loadData(obj);
    }
  }
  if(notFound){
    clearStats();
    alert("Creature not found");
  }
  */
}

