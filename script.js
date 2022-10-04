const textarea = document.querySelector("textarea"),
fileNAmeInput = document.querySelector(".filename"),
selectMenu = document.querySelector(".save-as select" ),
saveBtn = document.querySelector(".save-btn");
selectMenu.addEventListener("change", () =>{
    let selectedOPtion =selectMenu.options[selectMenu.selectedIndex].text;
    saveBtn.innerText =`Save As ${selectedOPtion.split(" ")[0]} File`
    console.log(selectedOPtion.split(" ")[0]);
});
saveBtn.addEventListener("click" ,() => {
    const blob = new Blob([textarea.value], {type : selectMenu.value});
    const fileUrl =URL.createObjectURL(blob);
    const link =document.createElement("a");
    link.download = fileNAmeInput.value;
    link.href =fileUrl;
    link.click();
})