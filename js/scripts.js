$(document).ready(function() {
  $("form#survey").submit(function(event) {
  event.preventDefault();
  var sq1 = $("select#sq1").val();
  var sq2 = $("select#sq2").val();
  var sq3 = $("select#sq3").val();
  var sq4 = $("select#sq4").val();
  var sq5 = $("select#sq5").val();

  if (sq1 === 'city' && sq2 === 'warm' && sq3 === 'budgetsm' && sq5 === 'stayus') {
    $("#destination").text("Austin, Texas");
    $("#result").show();
  } else if (sq1 === 'nature' && sq2 === 'cold' && sq3 === 'budgetbig' && sq4 === 'stayus'){
    $("#destination").text("Breckenridge, Colorado");
    $("#result").show();
  } else if (sq1 ==='nature' && sq2 === 'warm' && sq3 === 'budgetsm' && sq4 === 'english' && sq5 === 'abroad'){
    $("#destination").text("Hanoi, Vietnam");
    $("#result").show();
  } else if (sq1 === 'city' && sq2 === 'warm' && sq3 === 'budgetsm' && sq4 === 'noenglish'){
    $("#destination").text("Salvador, Bahia, Brazil");
    $("#result").show();
  } else if (sq1 === 'nature' && sq2 === 'cold' && sq3 === 'budgetbig' && sq4 === 'english' && sq5 === 'abroad'){
    $("#destination").text("Reykjavik, Iceland");
    $("#result").show();
  } else if (sq1 === 'city' && sq2 === 'cold' && sq3 === 'budgetbig' && sq4 === 'english' && sq5 === 'abroad'){
    $("#destination").text("Hong Kong, China");
    $("#result").show();
  } else {
    $("#destination").text("San Juan, Puerto Rico");
    $("#result").show();
  }
    $("form#survey").remove();
    event.preventDefault();
  });
});
