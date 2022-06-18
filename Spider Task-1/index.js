var words=["home","spider","atlas","great","hi"];
var word_pick= words[Math.floor(Math.random()*5)];
var n= word_pick.length;
var val;
var pos;
var hangman=0; 
var score=1000;
var j=1;
var arr=[];
var scores_list;
var list;
var max1;

if(JSON.parse(localStorage.getItem("scores")) != null){
    scores_list=JSON.parse(localStorage.getItem("scores"));
}
else{
    scores_list=[];
}

for(let i=0;i< n;i++){
    const dash = document.createElement("input");
    dash.setAttribute("class","letter");
    dash.setAttribute("id",i);
    const element = document.getElementById("container");
    element.appendChild(dash);
}

document.getElementById("btn").addEventListener("click",function(){
    val= document.getElementById("get-letter").value;
    document.getElementById("get-letter").value= "";
    for(let i=0;i<n;i++){
        if(val===word_pick[i] && !(arr.includes(i.toString()))){
            pos= i.toString();
            hangman=1;
        }
    }   
   
    if(hangman===0){
        j+=1;
        var image_url= "images/"+(j.toString())+".png";
        document.getElementById("man").src = image_url;
        score= score-100;
        if(image_url==="images/9.png"){
            alert("You lost, better luck next time!");
            location.reload();
        }
    }

    if(hangman===1){
        document.getElementById(pos).value=val;
        hangman=0;
        arr.push(pos);
        if(arr.length===n){
            scores_list.push(score);
            localStorage.setItem("scores",JSON.stringify(scores_list));            
            list= JSON.parse(localStorage.getItem("scores"));
            max1= list[0];
            for(let i=0;i<list.length;i++){
                if(list[i]>max1){
                    max1= list[i];
                }
            }
            alert("Congratulations!You won with a score of "+score+"|🥇:"+max1);

            location.reload();
        }
    }


});