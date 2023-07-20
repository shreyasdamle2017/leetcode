var isSymmetric = function(root) {
    let f = true;
        const trv = (leftP, rightP) => {
    
            if(!leftP){
                if(!rightP){
                    return
                }
            }
    
            if(leftP){
                if(!rightP){
                    f = false
                    return
                }
            }
    
            if(rightP){
                if(!leftP){
                    f = false
                    return
                }
            }
    
            if(leftP.val !== rightP.val) {
                f = false
            }
    
    
            
            trv(leftP.left,rightP.right)
            trv(leftP.right,rightP.left)
        }
    
        trv(root.left, root.right);
    
        return f;
    
    };

    /*Used Tree traversal with two pionters (Left traversing poniter & right traversing pointer)
    to simultaneously check if the tree is mirror image of itself or not. */