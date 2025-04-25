function copyToClipboard(event) {
  const text = event.target.innerText;

  if (navigator.clipboard) {
    // Use the modern asynchronous clipboard API if available
    navigator.clipboard.writeText(text).then(showMessage);
  } else {
    // Fallback to the old execCommand copy method
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    showMessage();
  }

  function showMessage() {
    const messageElement = document.createElement("div");
    messageElement.innerHTML = text + "<br><br>をコピーしました！";
    messageElement.style.position = "fixed";
    messageElement.style.top = "50%";
    messageElement.style.left = "50%";
    messageElement.style.transform = "translate(-50%, -50%)";
    messageElement.style.padding = "20px";
    messageElement.style.backgroundColor = "#fff";
    messageElement.style.color = "blue";
    messageElement.style.fontSize = "20px";
    messageElement.style.fontWeight = "bold";
    messageElement.style.borderRadius = "10px";
    document.body.appendChild(messageElement);
    setTimeout(function () {
      messageElement.remove();
    }, 2000);
  }
}

const parentElement_tab3 = document.getElementById("myResult_tab3");

parentElement_tab3.addEventListener("click", function (event) {
  if (event.target.tagName === "P") {
    copyToClipboard(event);
  }
});
