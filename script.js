// $(document).ready(function (){
//     $("#copyButton").click(function(){
//         var input= $("#inputFieldText").val();
//         navigator.clipboard.writeText(input).then(()=>{

//             alert("the text is copied to clipboard");
//         })
//     })
// })
$(document).ready(function () {
    $("#copyButton").click(function () { // Remove unnecessary 'copyTheField(text)'
      const input = $("#inputFieldText").val(); // Get the value from input field
        navigator.clipboard.writeText(input).then(() => {
            alert("The text is copied to clipboard");
        });
    });
});
