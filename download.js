document.getElementById("downloadBtn").addEventListener("click", function(){
    const link = this;
    link.href = canvas.toDataURL("image/png");
});
