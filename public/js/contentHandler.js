function updateContent(msg, label) {
  if (!document.getElementById(label)) {
    return; // should throw later
  }

  if (!typeof msg === 'string') {
    return; // should throw later
  }

  document.getElementById(label).innerText = msg;
}

function appendContent(msgObj, label) {
  if (!document.getElementById(label)) {
    return; // should throw later
  }

  if (!msgObj.msg) {
    return; // should throw later: body is null
  }

  if (!msgObj.type) { // default type
    var msgBox = document.createElement("div")
      msgBox.className = "msg";
    var nameBox = document.createElement("span");
      nameBox.className = "name";
    var name = document.createTextNode(msgObj.name);
    var msg = document.createTextNode(msgObj.msg);

    nameBox.appendChild(name);
    msgBox.appendChild(nameBox);
    msgBox.appendChild(msg);

    document.getElementById(label).appendChild(msgBox)
  }
}
