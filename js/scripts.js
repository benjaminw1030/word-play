$(document).ready(function () {
  $("#groceryList").submit(function (event) {
    event.preventDefault();
    $("#groceryList").toggle();
    $("#list").toggle();

    let groceryArray = [];
    groceryArray.push($("#groceryItem1").val(), $("#groceryItem2").val(), $("#groceryItem3").val(), $("#groceryItem4").val(), $("#groceryItem5").val());
    let groceryCaps = [];
    groceryArray.forEach(function (element) {
      groceryCaps.push(element.toUpperCase());
    });
    groceryCaps.sort();

    groceryCaps.forEach(function (element) {
      $("ul#finalList").append("<li>" + element + "</li>");
    });
  });
});