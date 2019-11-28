const arr = new Array;
const g = 50;
function init(){
    let x=0;
    let table = document.querySelector('table'); //forming the table

    for (let i=0; i<g; i++) {
        arr[i] = new Array;
        let row = table.insertRow();
        for (let j=0; j<g; j++){
            let cell = row.insertCell();
            cell.setAttribute('id', ++x);
            cell.setAttribute('i',i);
            cell.setAttribute('j',j);
        }
    }

    x=0;
    for(i=0; i<g; i++){ //filling the table with random living and dead cells
        for(j=0; j<g; j++){
            arr[i][j] = { curr_state: Math.round(Math.random()), id: ++x, new_state: -1}; //curr_state:0 means dead and state:1 means alive and id uniquely identifies every cell
            let cell = document.getElementById(arr[i][j].id); 
            if(arr[i][j].curr_state>0)
                cell.style.backgroundColor = '#ffd800';
            else
                cell.style.backgroundColor = '#393e46';
            
            cell.addEventListener('click',()=>{ //adding click event listner to each cell to make it dead/alive
                let [i,j]=[cell.getAttribute('i'), cell.getAttribute('j')];
                if(arr[i][j].curr_state==0){
                    arr[i][j].new_state = arr[i][j].curr_state = 1;
                    cell.style.backgroundColor = '#ffd800';
                }
                else{
                    arr[i][j].new_state = arr[i][j].curr_state = 0;
                    cell.style.backgroundColor = '#393e46';
                }
            })
        }
    }

    setTimeout(draw,500); //drawing the next gen
}

function draw(){ //will be called everytime to form the next generation
    
    for(i=0; i<g; i++){
        for(j=0; j<g; j++){
            let x = countAliveNeighbors(i,j); //counting the alive neighbors
            if(arr[i][j].curr_state==1 && (x>=4 || x<=1)) //death of a cell due to overpopulation or isolation
                arr[i][j].new_state=0;
            else if(x==3 && arr[i][j].curr_state==0) //birth of a cell 
                arr[i][j].new_state=1;
            else
                arr[i][j].new_state = arr[i][j].curr_state; //inherit new state from current state
        }
    }
    
    for(i=0; i<g; i++){
        for(j=0; j<g; j++){
            if(arr[i][j].new_state==0){ //color dead cells
                document.getElementById(arr[i][j].id).style.backgroundColor = '#393e46';
            }
            else if(arr[i][j].new_state==1){ //color born cells 
                document.getElementById(arr[i][j].id).style.backgroundColor = '#ffd800';
            }
            arr[i][j].curr_state = arr[i][j].new_state; //changing current state to new state
        }
    }

    setTimeout(draw, 200); //next generation
}
function countAliveNeighbors(i,j){
    let top, topL , topR, L, R, bottom, bottomL, bottomR;
    let c=0;
    let p = (i+1)%g, q = (j+1)%g, r = (i-1)%g, s = (j-1)%g; //form a wrap around the edges to provide 8 neighbors for every cell
    r=r<0?r+g:r;
    s=s<0?s+g:s;

    //top row
        top=arr[r][j].curr_state;
        topL = arr[r][s].curr_state;
        topR = arr[r][q].curr_state;
    //same row
        L = arr[i][s].curr_state;
        R = arr[i][q].curr_state;
      //bottom row
        bottom=arr[p][j].curr_state;
        bottomL = arr[p][s].curr_state;
        bottomR = arr[p][q].curr_state;

    if(top>0) //counting number of alive neighbors
        ++c;
    if(topL>0)
        ++c;
    if(topR>0)
        ++c;
    if(L>0)
        ++c;
    if(R>0)
        ++c;
    if(bottom>0)
        ++c;
    if(bottomL>0)
        ++c;
    if(bottomR>0)
        ++c;
    
    return c;
}
window.addEventListener('DOMContentLoaded', init);