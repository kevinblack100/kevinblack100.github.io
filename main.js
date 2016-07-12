var studentIndex = [
  { name: "Mark Snyder",
    url: "https://markwsnyder.github.io",
    comment: "" },
  { name: "Torick Davis",
    url: "https://zarick13.bitbucket.org",
    comment: "" }
];
var linkList = document.getElementById("linkList");
for (var i = 0, N = studentIndex.length; i < N; ++i) {
    var info = studentIndex[i];
    
    var studentLink = document.createElement("a");
    studentLink.setAttribute("href", info.url);
    studentLink.innerHTML = info.name;
    
    var comment = document.createElement("span");
    comment.innerHTML = " " + info.comment;
    
    var listItem = document.createElement("li");
    listItem.appendChild(studentLink);
    listItem.appendChild(comment);
    
    linkList.appendChild(listItem); 
}
