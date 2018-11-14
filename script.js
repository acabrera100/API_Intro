document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector("button");
  let picker = document.querySelector("demo");
  button.addEventListener("click", event => {

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
    console.log(newArr);
    demo.innerHTML = Math.floor(Math.random() * newArr.length);
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
