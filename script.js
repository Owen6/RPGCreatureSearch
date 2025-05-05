const validCreatureURL = "https://rpg-creature-api.freecodecamp.rocks/api/creatures";
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



window.onload = async () => {
  creatures = await fetchData();
  searchBtn.addEventListener("click", searchCreatures);
}

const fetchData = async (link=validCreatureURL) => {
  try {
    const res = await fetch(link);
    const data = await res.json();
    //console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

const loadData = async (obj) => {
  creatureSpanMap["types"].innerHTML = ``;
  const data = await fetchData(`${creatureInfoURL}${obj.id}`);
  console.log(data);
  //make name capital
  creatureSpanMap["creature-name"].textContent = data.name.toUpperCase();
  creatureSpanMap["creature-id"].textContent = data.id;
  creatureSpanMap["weight"].textContent = data.weight;
  creatureSpanMap["height"].textContent = data.height;
  data.types.forEach((type) => {
    //make capital
    creatureSpanMap["types"].innerHTML += `<div>${type.name.toUpperCase()}</div>`;
  })
  data.stats.forEach((stat) => {
    creatureSpanMap[stat.name].textContent = stat.base_stat;
  })
  /*
  creatureSpanMap["hp"].textContent = data.stats;
  creatureSpanMap["attack"].textContent = 'test';
  creatureSpanMap["defense"].textContent = 'test';
  creatureSpanMap["special-attack"].textContent = 'test';
  creatureSpanMap["special-defense"].textContent = 'test';
  creatureSpanMap["speed"].textContent = 'test';
  */
}


const searchCreatures = () => {
  //console.log(searchInput.value);
  if(creatures.length === 0){
    alert("Please wait a second more for the data to load.");
    return;
  }else{
    /**creatures.forEach((obj)=>{
      if(searchInput.value === obj.name){
        console.log("create function to pull information and call before return");
        return
      }else{

      }
    })
    */
    for(const obj of creatures){
      if(searchInput.value === obj.name || parseInt(searchInput.value) === obj.id){
        //console.log("create function to pull information and call before return");
        loadData(obj)
        return
      }
    }
    alert("Creature not found");
  }
}

