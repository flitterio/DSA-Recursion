const sheepCount = function(sheep) {

for(let i = sheep; i >= 0; i--){ 
        
 if(i === 0){
        return 'All sheep jumped over the fence';
    }  

    console.log( i  + ': Another Sheep jumps over the fence');  
    }

}
 
let sheep = 3;
console.log(sheepCount(sheep))
