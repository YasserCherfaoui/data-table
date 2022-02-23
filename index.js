let index = 1;
window.onload = function () {
  const data = [
    {
      name: "Em",
      lastName: "andM",
      class: "F",
      groupe: 2,
      mark: 14,
      id: 1,
    },
    {
      name: "MJ",
      lastName: "Cole",
      class: "F",
      groupe: 2,
      mark: 15,
      id: 2,
    },
    {
      name: "James",
      lastName: "bond",
      class: "F",
      groupe: 2,
      mark: 16,
      id: 3,
    },
    {
      name: "Taylor",
      lastName: "B",
      class: "F",
      groupe: 2,
      mark: 17,
      id: 4,
    },
    {
      name: "Marshall",
      lastName: "Smith",
      class: "F",
      groupe: 2,
      mark: 18,
      id: 5,
    },
    {
      name: "Xzibit",
      lastName: "Dan",
      class: "F",
      groupe: 2,
      mark: 19,
      id: 6,
    },
    {
      name: "Tupac",
      lastName: "kur",
      class: "F",
      groupe: 2,
      mark: 20,
      id: 7,
    },
    {
      name: "Martin",
      lastName: "Luther",
      class: "F",
      groupe: 2,
      mark: 21,
      id: 8,
    },
    {
      name: "Bruce",
      lastName: "Mathers",
      class: "F",
      groupe: 2,
      mark: 22,
      id: 9,
    },
    {
      name: "Andre",
      lastName: "Dr",
      class: "F",
      groupe: 2,
      mark: 23,
      id: 10,
    },
    {
      name: "Fite",
      lastName: "Bone",
      class: "F",
      groupe: 2,
      mark: 24,
      id: 11,
    },
    {
      name: "Kendrick",
      lastName: "Lamar",
      class: "F",
      groupe: 2,
      mark: 25,
      id: 12,
    },
    {
      name: "Kate",
      lastName: "gold",
      class: "F",
      groupe: 2,
      mark: 26,
      id: 13,
    },
    {
      name: "Jennifer",
      lastName: "Lop",
      class: "F",
      groupe: 2,
      mark: 27,
      id: 14,
    },
    {
      name: "Billie",
      lastName: "Baker",
      class: "F",
      groupe: 2,
      mark: 28,
      id: 15,
    },
    {
      name: "Kim",
      lastName: "Smith",
      class: "F",
      groupe: 2,
      mark: 29,
      id: 16,
    },
  ];
  const maxI =
    data.length % 5 != 0 ? Math.floor(data.length / 5) + 1 : data.length / 5;
  let next = document.querySelector("#Next");
  let back = document.querySelector("#Back");
  let tbody = document.querySelector("tbody");
  var contentNum = document.querySelector("#dataNum");

  console.log("Hello there its vaillla");
  generateTable();
  upadteTheIndex(index);
  displayRows(index);
  next.onclick = function (event) {
    console.log("hello");
    index++;
    upadteTheIndex(index);
    displayRows(index);
  };
  back.onclick = function (event) {
    console.log("hello");
    index--;
    upadteTheIndex(index);
    displayRows(index);
  };
  function generateTable() {
    for (let i = 0; i < data.length; i++) {
      var trow = document.createElement("tr");
      trow.appendChild(insertTd(data[i].name));
      trow.appendChild(insertTd(data[i].lastName));
      trow.appendChild(insertTd(data[i].class));
      trow.appendChild(insertTd(data[i].groupe));
      trow.appendChild(insertTd(data[i].mark));
      trow.style.display = "none";
      tbody.appendChild(trow);
    }
  }
  function displayRows(index) {
    if (index == maxI) {
      j = data.length % 5;
      for (let i = data.length - j; i < data.length; i++) {
        tbody.children[i].style.display = "";
      }
    } else {
      for (let i = 5 * (index - 1); i < 5 * index; i++) {
        tbody.children[i].style.display = "";
      }
    }
    if (index > 1) {
      for (let i = 5 * (index - 2); i < 5 * (index - 1); i++) {
        tbody.children[i].style.display = "none";
      }
    }
    for (let i = 5 * index; i < 5 * (index + 1); i++) {
      tbody.children[i].style.display = "none";
    }
  }

  function insertTd(text) {
    var tdata = document.createElement("td");
    var tdataText = document.createTextNode(text);
    tdata.appendChild(tdataText);
    return tdata;
  }
  function upadteTheIndex(counter) {
    if (counter == 1) {
      back.disabled = true;
    } else {
      back.disabled = false;
    }

    let condition = maxI === counter;
    if (condition) {
      next.disabled = true;
    } else {
      next.disabled = false;
    }
    const length = tbody.children.length;
    const start_e = 5 * (counter - 1) + 1;
    let end_e;
    if (counter != maxI) {
      end_e = 5 * counter;
    } else {
      end_e = tbody.children.length;
    }
    contentNum.innerHTML = `${start_e}-${end_e} of ${length} element`;
  }
};
