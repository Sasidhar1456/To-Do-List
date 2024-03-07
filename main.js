document.addEventListener("DOMContentLoaded",function(){

    const textElement = document.getElementById("type");
    const textContent = textElement.innerHTML.trim();
    textElement.innerHTML = "";

    let index = 0;

    let arr =[" "," "," ","<b class'font-bold text-5xl font-sans'>|</b>"];
   

    const typingInterval = setInterval(() => {
        

            arr.splice(index,0,textContent[index]);
            textElement.innerHTML = arr.join("");
            index++;

        if(index === textContent.length){
            textElement.innerHTML = textContent;
            clearInterval(typingInterval);

            
        }

    },150)
});