function getGraph(vertices, edges) {
    let objGraph = Array(vertices).fill(0).map(() => Array());

    for(let edge of edges) {
        objGraph[edge[0]].push(edge[1]);
        objGraph[edge[1]].push(edge[0]);
    }

    return objGraph;
}

function dfs(graph, v, discovered, end) {
    discovered[v] = true;
    process.stdout.write(v.toString() + ' ');
    // if(v === end) return true;

    for(let u of graph[v]) {
        if(discovered[u] === false) {
            dfs(graph, u, discovered, end);
        }

        if(u === end) return true;
    }

    return false;
}

function getPaths(vertices, edges, start, end) {
    const graph = getGraph(vertices, edges);

    let discovered = Array(vertices).fill(false);
    return dfs(graph, 0, discovered, end);
}

// const edges1 = [
//     [0,1],
//     [1,2],
//     [2,0]
// ];
// const pathExists = getPaths(3, edges1, 0, 2);
// console.log();
// if(pathExists) console.log('Path Exists!');
// else           console.log('No Path Exists!');

const edges2 = [
    [0,1],
    [0,2],
    [3,5],
    [5,4],
    [4,3]
];
const pathExists = getPaths(6, edges2, 0, 5);
console.log();
if(pathExists) console.log('Path Exists!');
else           console.log('No Path Exists!');
