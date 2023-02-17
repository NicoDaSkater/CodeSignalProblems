function solution(shoes) {
    const hash = {}
    for(let i = 0; i < shoes.length; i++) {
        const curr = shoes[i]
        const currKey = curr[1]
        if(hash[currKey]) {
            hash[currKey][curr[0]]++ 
        }
        else {
           hash[currKey] = []
           hash[currKey][0] = 0
           hash[currKey][1] = 0
           hash[currKey][curr[0]]++ 
        }
    }
    for(let pair in hash) {
        const pairMap = hash[pair]
        if(!(pairMap[0] === pairMap[1])) {
            return false
        }
    }
    return true
}