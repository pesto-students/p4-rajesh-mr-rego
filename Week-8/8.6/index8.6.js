function findAllPaths(vertices, edges, start, end) {
    let graph = Array(vertices).fill(0).map(() => Array());
    for(let edge of edges) {
        graph[edge[0]].push(edge[1]);
    }
    console.log(graph);

    console.log('PATHS:');
    let discovered = Array(vertices).fill(false);
    let paths = [];
    paths.push(start);
    findAllPathsRecursive(graph, start, end, discovered, paths);
}

function findAllPathsRecursive(graph, start, end, discovered, paths) {
    // console.log('typeof', typeof start, start, typeof end, end);
    if(start == end) {
        console.log(paths);
        return;
    }

    discovered[start] = true;
    for(let v of graph[start]) {
        if(!discovered[v]) {
            paths.push(v);
            findAllPathsRecursive(graph, v, end, discovered, paths);
            paths.splice(paths.indexOf(v), 1);
        }
    }
    discovered[start] = false;
}

const vertices1 = 4;
const edges1 = [
    [0,1],
    [0,2],
    [1,3],
    [2,3],
];
findAllPaths(vertices1, edges1, 0, 3);
