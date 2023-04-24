const nodesDatSet = [
  { id: 1, label: "Craiova" },
  { id: 2, label: "Bucuresti" },
  { id: 3, label: "Slatina" },
  { id: 4, label: "Constanta" },
  { id: 5, label: "Iasi" },
];

const edgesDataSet = [
  { from: 1, to: 3, label: "DN3", color: "blue" },
  { from: 1, to: 2, label: "DN21", color: "blue" },
  { from: 2, to: 4, label: "A16", color: "blue" },
  { from: 2, to: 5, label: "A1", color: "blue" },
];

const nodes = new vis.DataSet(nodesDatSet);
const edges = new vis.DataSet(edgesDataSet);
const container = document.getElementById("mynetwork");

const data = {
  nodes: nodes,
  edges: edges,
};

const options = {
  physics: {
    stabilization: true,
  },
  autoResize: true,
  edges: {
    smooth: true,
    color: "#000000",
    width: 0.3,
  },
  height: '100%',
  width: '100%',
  manipulation: {
    addNode: (nodeData,callback) => {
      nodeData.label = document.getElementById("node-label").value;
      nodeData.id = document.getElementById("node-id").value;
      callback(nodeData);
    },
    addEdge: (edgeData,callback) => {
      edgeData.label = document.getElementById("edge-label").value;
      edgeData.color = "blue";
      if (edgeData.from === edgeData.to) {
        const confirmInfo = confirm("Do you want to connect the node to itself?");
        if (confirmInfo === true) {
          callback(edgeData);
        }
      }
      else {
        callback(edgeData);
      }
    },
    editNode: (nodeData,callback) => {
      nodeData.label = document.getElementById("node-label").value;
      callback(nodeData);
    },
    editEdge: true,
  }
}
const network = new vis.Network(container, data, options);


const visLables = document.getElementsByTagName("button");
console.log(visLables);

for (const visLable of visLables) {
 console.log(visLable);
  visLable.addEventListener('click',function() {
    const popUp = document.getElementById("node-popUp");
    if (popUp.style.display === "none") {
      popUp.style.display = "block";
    } else {
      popUp.style.display = "none";
    }
  });
}

EventListener.addEventListener("click",function(){
  window.alert("1 is called")
})



