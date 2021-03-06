document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector("button");
  let secondClick = document.querySelector("button");


  button.addEventListener("click", event => {
    let new_element_p = document.createElement("p");
    let data = APIResponse.message;
    let newArr = [];

    function Woofers(names) {
      let answer = "";
      answer += names[0].toUpperCase() + names.slice(1);
      return answer;
    }
    Object.keys(data).forEach(animal => {
      if (data[animal].length) {
        data[animal].forEach(type => {
          newArr.push(Woofers(type) + " " + Woofers(animal));
        });
      } else {
        newArr.push(Woofers(animal));
      }
    });
    // console.log(newArr);
    new_element_p.innerText = newArr[Math.floor(Math.random() * newArr.length)];
    event.target.parentNode.appendChild(new_element_p, event.target);
      button.innerHTML = "ANUTHA WAN"
    // debugger;

    secondClick.addEventListener("click", event => {
      event.target.parentNode
        .appendChild(new_element_p, event.target)
        .remove(new_element_p, event.target);
        button.innerHTML = "WOOF WOOF MUTHA UFFA"

        // debugger;
    });
  });

  let APIResponse = {
    status: "success",
    message: {
      affenpinscher: [],
      african: [],
      airedale: [],
      akita: [],
      appenzeller: [],
      basenji: [],
      beagle: [],
      bluetick: [],
      borzoi: [],
      bouvier: [],
      boxer: [],
      brabancon: [],
      briard: [],
      bulldog: ["boston", "french"],
      bullterrier: ["staffordshire"],
      cairn: [],
      cattledog: ["australian"],
      chihuahua: [],
      chow: [],
      clumber: [],
      cockapoo: [],
      collie: ["border"],
      coonhound: [],
      corgi: ["cardigan"],
      cotondetulear: [],
      dachshund: [],
      dalmatian: [],
      dane: ["great"],
      deerhound: ["scottish"],
      dhole: [],
      dingo: [],
      doberman: [],
      elkhound: ["norwegian"],
      entlebucher: [],
      eskimo: [],
      frise: ["bichon"],
      germanshepherd: [],
      greyhound: ["italian"],
      groenendael: [],
      hound: ["afghan", "basset", "blood", "english", "ibizan", "walker"],
      husky: [],
      keeshond: [],
      kelpie: [],
      komondor: [],
      kuvasz: [],
      labrador: [],
      leonberg: [],
      lhasa: [],
      malamute: [],
      malinois: [],
      maltese: [],
      mastiff: ["bull", "tibetan"],
      mexicanhairless: [],
      mix: [],
      mountain: ["bernese", "swiss"],
      newfoundland: [],
      otterhound: [],
      papillon: [],
      pekinese: [],
      pembroke: [],
      pinscher: ["miniature"],
      pointer: ["german", "germanlonghair"],
      pomeranian: [],
      poodle: ["miniature", "standard", "toy"],
      pug: [],
      puggle: [],
      pyrenees: [],
      redbone: [],
      retriever: ["chesapeake", "curly", "flatcoated", "golden"],
      ridgeback: ["rhodesian"],
      rottweiler: [],
      saluki: [],
      samoyed: [],
      schipperke: [],
      schnauzer: ["giant", "miniature"],
      setter: ["english", "gordon", "irish"],
      sheepdog: ["english", "shetland"],
      shiba: [],
      shihtzu: [],
      spaniel: [
        "blenheim",
        "brittany",
        "cocker",
        "irish",
        "japanese",
        "sussex",
        "welsh"
      ],
      springer: ["english"],
      stbernard: [],
      terrier: [
        "american",
        "australian",
        "bedlington",
        "border",
        "dandie",
        "fox",
        "irish",
        "kerryblue",
        "lakeland",
        "norfolk",
        "norwich",
        "patterdale",
        "russell",
        "scottish",
        "sealyham",
        "silky",
        "tibetan",
        "toy",
        "westhighland",
        "wheaten",
        "yorkshire"
      ],
      vizsla: [],
      weimaraner: [],
      whippet: [],
      wolfhound: ["irish"]
    }
  };
});
