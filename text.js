/*var i = 0;
var txt = 'Let us help you build your dreams.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("greeting1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

async function deletegreeting1(elementId) {
    const greeting1 = $(elementId).html();
    const letters = greeting1.split("");
    let i = 0;
    while(letters.length > 0) {
      await waitForMs(100);
      letters.pop();
      $(elementId).html(letters.join(""));
    }
  }

  deletegreeting1("#greeting1");
 
  function myInit(){type deletegreeting1("#greeting1")};
  */
 
async function typegreeting1(greeting1, color,elementId, delay = 100) {
    const letters = greeting1.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      $(elementId).append(letters[i]);
      i++
    }
 
  }
  
  
  function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  



  async function deletegreeting1(elementId) {
    const greeting1 = $(elementId).html();
    const letters = greeting1.split("");
    while(letters.length > 0) {
      await waitForMs(100);
      letters.pop();
      $(elementId).html(letters.join(""));
    }
  }

  window.onload=async function(){
      const services=[{service:"web app" ,color:"#32cd32"},{service:"mobile app",color:"black"}]
      var i=0;
      while(true){
    updateFontColor("#greeting1",services[i].color)
    await typegreeting1(services[i].service, services[i].color,"#greeting1");
    await waitForMs(2000);
    await deletegreeting1("#greeting1");
    await waitForMs(2000);
    i++
    if(i >= services.length) {i = 0;}
  }
} ;

function updateFontColor(elementId, color) {
    $(elementId).css('color', color);
  }
  