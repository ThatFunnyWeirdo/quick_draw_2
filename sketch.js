
// you have been provided with the images in the images folder and add all the images to the below array.
var images=["images/apple.jpg",]
    
function myImages(){

  random_number = Math.floor((Math.random()*6)+1);
  //to generate the random number, inside the Math.floor() function access the math.random() function along the images array length.
  
//pass the random_number variable as the index to the images array and store it in a variable sketch.
document.getElementById("images").src = sketch
console.log(images[random_number]);
sketch = images[random_number];

}  