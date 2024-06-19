function addRecommendation() {
  // Obtener el mensaje de la nueva recomendación
  let recommendation = document.getElementById("new_recommendation");
  // Si el usuario ha dejado una recomendación, mostrar un pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    showPopup(true, "Thanks for leaving a recommendation!"); // Mostrar el popup con el mensaje

    // Crear un nuevo elemento 'recommendation' y establecer su valor al mensaje del usuario
    var element = document.createElement("div");
    element.setAttribute("class", "recommendation");
    element.innerHTML = "<span>&#8220;</span>" + recommendation.value + "<span>&#8221;</span>";
    // Añadir este elemento al final de la lista de recomendaciones
    document.getElementById("all_recommendations").appendChild(element); 
    
    // Restablecer el valor del textarea
    recommendation.value = "";
  }
}

function showPopup(bool, message = "") {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible';
    document.getElementById('popup-message').innerText = message;
  } else {
    document.getElementById('popup').style.visibility = 'hidden';
  }
}
