let a = [0,1,2,5,3,7,1,7,3,0,1,2];
a.indexOf(3); //?
a.lastIndexOf(3) //?
a.indexOf(5); //?

function findAll(a,x) {
    let results = [],
    len = a.length,
    pos = 0;

    while(pos < len) {
        pos = a.indexOf(x,pos);
        if(pos === -1) { break;
        } else {
        results.push(pos);
        pos += 1;
        }
    }

    return results;

}

findAll(a,2) //?