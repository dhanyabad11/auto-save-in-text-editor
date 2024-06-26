let timeout;



const textAreaEl = document.getElementById("textAreaEl"); 

const contentFromLS = localStorage.getItem("content");
if (contentFromLS) {
    textAreaEl.value = contentFromLS; 
}
//Debouncing concept
textAreaEl.addEventListener("keyup", (e) => { 
    if (timeout) {
        clearTimeout(timeout);
    }



    saveContentInLocalStorage(e.target.value);
});

function saveContentInLocalStorage(content) {
    timeout = setTimeout(() => {
        console.log("Saving content:", content);
        localStorage.setItem("content", content);
    }, 500);
}
