const validCreatureURL = "https://rpg-creature-api.freecodecamp.rocks/api/creatures";
//https://rpg-creature-api.freecodecamp.rocks/api/creature/{name-or-id}
const creatureInfoURL = "https://rpg-creature-api.freecodecamp.rocks/api/creature/";

const creatureStatsSpans = document.querySelectorAll(".stat");

let stats = [];
let loaded = false;


/**
creatureStatsSpans.forEach((span) => {
  console.log(span.id);
  console.log(span.innerText);
})
*/


window.onload = async () => {
  /** 
  fetch(validCreatureURL)
    .then((res) => res.json())
    .then((data) => {
      stats = data;
    })
    .catch((err) => {
      alert(`Error Occured: ${err}`)
    });
  
  */
  stats = await fetchData();
  //console.log(stats)
  //loadData(stats[0]);
  //bigchungus
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
  const data = await fetchData(`${creatureInfoURL}${obj.id}`)
  console.log(data)
}

/**
const fetchData = async () => {
  try {
    const res = await fetch(validCreatureURL);
    const data = await res.json();
    //console.log(data);
    const creaturesStats = await Promise.all(data.map(async (obj) => {
      
      const res2 = await fetch(`https://rpg-creature-api.freecodecamp.rocks/api/creature/${obj.id}`);
      const data2 = await res2.json();
      //console.log(data2);
      
      return data2
    }))

    //const stats = await Promise.all(creaturesStats);
    console.log(creaturesStats);
    //console.log(data);
    /** 
    creatures = data;
    console.log(creatures);
    data.forEach((obj) => {
      creatures.push([obj,validCreatureURL+obj.id])
    });
    
  } catch (err) {
    console.log(err);
  }

};
*/