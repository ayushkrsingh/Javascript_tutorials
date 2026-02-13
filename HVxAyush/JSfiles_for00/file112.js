
//Child RelationShip
const rootNode = document.getRootNode();
const HtmlElementNodes = rootNode.childNodes[0];
console.log(HtmlElementNodes.childNodes);  // NodeList(3) [head, text, body]
const BodyElementNodes = HtmlElementNodes.childNodes[2];   // third element of HtmlElementNodes
const HeadElementNodes = HtmlElementNodes.childNodes[0];
console.log(BodyElementNodes.childNodes);  // NodeList(7) [text, div.container, text, comment, text, script, text]
console.log(HeadElementNodes.childNodes)
//Parent RelationShip
console.log(BodyElementNodes.parentNode);

//Sibling RelationShip
console.log(BodyElementNodes.nextSibling);   // null
console.log(HeadElementNodes.nextSibling);   // #text    (the new line and some space after the head tag.. we can see it inside #text in the data field)


//Task-----------------------------------------------------
const myheading = document.querySelector(".container h1");
const container = myheading.parentNode;
container.style.color = "red";
container.style.backgroundColor = "#aaa";
//---------------------------------------------------------

// If i do NOT want textnodes, newline spaces inside my nodelist then: **Use children

console.log(container.childNodes);   // Unnecessary text and new line spaces also included
console.log(container.children);    // HTMLCollection(2) [h1, p]





/**
//  * Recursively traverses and processes all child nodes of a given node.
//  * @param {Node} node The starting node for traversal.
//  */
// function traverseNodes(node) {
//   // Process the current node (e.g., log its type and name)
//   console.log(`Node Type: ${node.nodeType}, Node Name: ${node.nodeName}`);

//   // Loop through all child nodes of the current node
//   for (let i = 0; i < node.childNodes.length; i++) {
//     const childNode = node.childNodes[i];
//     // Recursively call the function for the child node
//     traverseNodes(childNode);
//   }
// }

// // Start the traversal from the root of the document (the <html> element)
// traverseNodes(document.documentElement);
