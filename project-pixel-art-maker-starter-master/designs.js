// Select color input

// Select size input

function makeGrid() {

    // Your code goes here!
    
        
    const myHeight = document.getElementById("inputHeight").value;
    const myWidth = document.getElementById("inputWidth").value;
       
    document.getElementById("pixelCanvas").innerHTML = '';    
    
        for (var i = 1; i <= myHeight; i++){
            const row = document.createElement("tr")
            document.getElementById("pixelCanvas").appendChild(row)
            for (var x = 1; x <=myWidth; x++){
                const cell = document.createElement("td")
                cell.addEventListener("click",function(){ this.style.backgroundColor=document.getElementById("colorPicker").value})
                row.appendChild(cell)
            }
    
        }    
       
        
    }