var fedback=[
    ' adipis ae delectus magni enim! Blanditiis explicabo enim alias saepe?',
    'adipisicing elit. A architecto corporis, suscipitLorem ipsum dolor sit amet, consectetur  ',
    ' dolor sit amet, consecteturLorem ipsum ',
    
]
    var x =-1;
function assigment() {
    var box=Math.floor(Math.random()*fedback.length );

    while(box==x){
        box =Math.floor(Math.random()*fedback.length)
    }
    console.log(box);
    document.getElementById('one').innerHTML=fedback[box]
    x=box
}  