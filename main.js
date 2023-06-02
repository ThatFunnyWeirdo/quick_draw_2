image_data_set = ["images/alarm_clock", "images/apple", "images/pen", "images/camera", "images/sweater", "images/book"];

random_number = Math.floor((Math.random()*6)+1);
sketch = quick_draw_data_set[random_number];
document.getElementById('sketch_name').innerHTML = 'Sketch To be Drawn: ' + sketch;

timer_counter = 0;

timer_check = "";

drawn_sketch = "";

answer_holder = "";

score = 0;

function setup() 
{
    canvas = createCanvas(280,280);
    canvas.center();
    background("white");
}

function draw()
{
    check_sketch();
    
    if(drawn_sketch == sketch)
    {
        document.getElementById("answer_holder").innerHTML = "set";
        score = score + 1;
        document.getElementById("display_score").innerHTML = "Score:" + score;
    }
}

function check_sketch()
{
    timer_counter = 
    document.getElementById("display_time").innerHTML = "Timer: " + timer_counter;
    console.log("timer_counter");
    if( timer_counter > 400)
    {
        timer_counter = 0;
        timer_check = "completed";
    }

    if (timer_check == "completed", timer_counter == 400)
    {
        timer_check = ""
        answer_holder = "";
        updateCanvas();
    }
}

function updateCanvas()
{
    background("white");
}