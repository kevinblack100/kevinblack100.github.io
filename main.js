var studentIndex = [
  { name: "Kevin Black",
    username: "kevinblack100",
    comment: "(This page)" }
];
var linkList = document.getElementById("linkList");
for (var i = 0, N = studentIndex.length; i < N; ++i) {
    var info = studentIndex[i];
    
    var studentLink = document.createElement("a");
    var url = "https://" + info.username + ".github.io";
    studentLink.setAttribute("href", url);
    studentLink.innerHTML = info.name;
    
    var comment = document.createElement("span");
    comment.innerHTML = " " + info.comment;
    
    var listItem = document.createElement("li");
    listItem.appendChild(studentLink);
    listItem.appendChild(comment);
    
    linkList.appendChild(listItem); 
}
