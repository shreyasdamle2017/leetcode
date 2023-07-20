var isSameTree = function(p, q) {
    let f = true;

    const trv = (nodeP, nodeQ) => {
        if(nodeP){
            if(!nodeQ){
                f = false
                return
            }
        }

        if(!nodeP){
            if(nodeQ){
                f = false
                return
            }
        }

        if(!nodeP) return

        if(nodeP.val !== nodeQ.val){
            f = false
            return
        }

        if((nodeP.left === null && nodeQ.left) || (nodeP.left && nodeQ.left=== null)){
            f = false
            return
        }
        
        if((nodeP.right === null && nodeQ.right) || (nodeP.right && nodeQ.right=== null)){
            f = false
            return
        }

        if(nodeP.left) trv(nodeP.left, nodeQ.left)
        if(nodeP.right) trv(nodeP.right, nodeQ.right)
    }

    trv(p,q)

    return f;

};

//Used tree traversal method inorder to solve this 'Easy' category problem.
