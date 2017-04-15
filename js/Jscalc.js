$(document).ready(function(){
var inputs =[""];
var totalString ;
var operators1 = ["+","-","*","/"];
var operators2 = ["."];
var nums= [0,1,2,3,4,5,6,7,8,9,];
 function getValue(input){
     if(inputs.length <= 13){
     if (operators2.includes(inputs[input.length-1]=== true && input===".")){
         console.log("duplicate '.' ");
     }
     else if(inputs.length === 1 && operators1.includes(input)=== false) {
         inputs.push(input);
     }
     else if(operators1.includes(inputs[inputs.length -1])=== false){
         inputs.push(input);
     }
     else if(nums.includes(Number(input))){
         inputs.push(input);
     }
     }
     else{
         inputs.length = 0;
         alert('Click AC to Clear error');
         inputs=[""];
     }
     
     update();
 }
 function update(){
     totalString= inputs.join("")
     console.log(totalString);
     if(totalString.length > '13'){
         totalString = "input error" ;
     
    }
 
     $('#calcDisplay').html(totalString);
 }
 function getTotal(){
     totalString = inputs.join("");
     $('#calcDisplay').html(eval(totalString));
     console.log(eval(totalString));
     }
 $('a').on('click',function(){
     if(this.id === "clearAll"){
         inputs = [""];
         update();
     }
     else if(this.id ==="clearOne"){
         inputs.pop();
         update();
     }
     else if(this.id === "total"){
         getTotal();
         inputs = [""];
     }
     else{
         if(inputs[inputs.length-1].indexOf("+","-","/","*")===-1){
             getValue(this.id);
            }
         else{
             getValue(this.id);
         }
     }
 })
 $('a.btn-pp').on('click',function(){
     $('a.btn-pp').addClass('btn-pp-press');
 })
});