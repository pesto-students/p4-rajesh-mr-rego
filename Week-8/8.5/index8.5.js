function createGraph(vertices, edges) {
    let graph = Array(vertices).fill(0).map(() => Array());

    edges.forEach(edge => {
        graph[edge[0]].push(edge[1]);
    });

    return graph;
}

function printGraph(root) {
    console.log(graph);

    let vertices = Object.keys(graph);
    for(let vertex of vertices) {
        process.stdout.write(vertex.toString() + ' -> ');

        for(let edge of graph[vertex]) {
            process.stdout.write(edge + ' ');
        }
        console.log();
    }
}

function findTownJudge(graph) {
    // check if any vertex is empty
    console.log("TOWN JUDGE SEARCH STARTS");
    let vertices = Object.keys(graph);
    // console.log(vertices);

    let noTrustQueue = [];
    for(let vertex of vertices) {
        if(graph[vertex].length == 0) {
            noTrustQueue.push(vertex);
        }
    }
    // console.log('noTrustQueue:', noTrustQueue);

    if(noTrustQueue.length != 1) {
        return "No Town Judge exists!";
    }

    let suspectedJudge = noTrustQueue.pop();
    // console.log('suspected judge:', suspectedJudge);
    for(let vertex of vertices) {
        if(vertex != suspectedJudge) {
            // console.log('checking vertex:', vertex);
            // console.log('graph[vertex]:', graph[vertex]);
            // console.log(graph[vertex].includes(suspectedJudge));

            for(let ppl of graph[vertex]) {
                // console.log('person:', ppl);
                if(ppl != suspectedJudge) {
                    return "This isn't a judge";
                }
            }
        }
    }
    return "Judge found:" + suspectedJudge;
}

// let edges1 = [
//     [0,1],
//     [0,2],
//     [1,2],
//     [2,3],
//     [1,4],
//     [3,5]
// ];

// let edges1 = [
//     [0, 1]
// ];

let edges1 = [
    [0, 2],
    [1, 2]
];

let graph = createGraph(3, edges1);
printGraph();
console.log();
console.log(findTownJudge(graph));
