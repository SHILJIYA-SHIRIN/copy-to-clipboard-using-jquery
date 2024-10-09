
$(document).ready(function () {
    $("#copyButton").click(function () { // Remove unnecessary 'copyTheField(text)'
      const input = $("#inputFieldText").val(); // Get the value from input field
        navigator.clipboard.writeText(input).then(() => {
            alert("The text is copied to clipboard");
        });
    });
});
