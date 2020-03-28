var container = document.querySelector(".listContainer");
var ul = document.querySelector(".list");
fetch("http://localhost:3000/typesNews")
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log("json ==>", myJson);
    myJson.forEach(function(item) {
      var li = document.createElement("li");
      li.textContent = item.title;
      ul.appendChild(li);
    });
  });

container.appendChild(ul);
