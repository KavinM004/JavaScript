const studentsName = [
  "Kavin M",
  "Karthick M",
  "Sanjay Kumar E",
  "Kavin M",
  "Karthick M",
];
const uniqueSet = new Set(studentsName);

// Convert a set to array by 'spread' operator :
// const uniqueArray = [...uniqueSet]; || const uniqueArray = [...new Set(studentsName)];


const mySet = new Set([1, 2, 3]);
mySet.add(4).add(44).add(45).add(47).add(68);
console.log(mySet);
mySet.delete(3);
console.log(mySet);
console.log(mySet.has(3));
console.log(mySet.size); 

// Syntax of using entries :

     const set = new Set(["apple", "banana", "cherry"]); 
     console.log(set);
     const iterator = set.entries(); 
     console.log(iterator.next().value); 

/* 1.Subset, 2.Union, 3. Intersection, 4. Difference */

// Subset :
    Set.prototype.subset = function(otherset){
        if(this.size > otherset.size){
            return false;
        }else{
            for(let value of this){
                if(!otherset.has(value)) return false;
            }
            return true;
        }
    };

  // Union set :
    const setA = new Set([1, 2, 3]);
    const setB = new Set([1, 2, 3, 4, 5, 6]);
    console.log(setA.subset(setB)); // true

    Set.prototype.union = function (otherset){
        let unionSet = new Set(this);
        for(let value of otherset){
                    unionSet.add(value);
                }
                return unionSet;
            }

    console.log(setA.union(setB)); 

 // Intersection Set :   
    Set.prototype.intersection = function(otherset){
        let intersectionSet = new Set();
        for(let value of this){
                if(otherset.has(value)){
                    intersectionSet.add(value);
                }
        }
        return intersectionSet;
    };
    console.log(setA.intersection(setB));

// Difference Set :
    Set.prototype.difference = function(otherset){
        let differSet = new Set();
        for(let value of otherset){
            if(!this.has(value)){
                differSet.add(value);
            }
        }
        return differSet;
    };
    console.log(setA.difference(setB));

// Tag widget :
    class TagWidget {
        constructor() {
            this.tags = new Set();
        }
        addTag (newtag){
            this.tags.add(newtag);
            console.log(this.tags);
            
        }
    };
    const tagWidget = new TagWidget();
    tagWidget.addTag('tag1');
    tagWidget.addTag('tag2');
    tagWidget.addTag('tag3');
    console.log(setA);
    setA.clear();
    console.log(setA);
    
    