This was a project I completed for the Udacity Intro to Programming Nanodegree.

The original prompt was to create a website that allowed for a customizable
sized grid, and then you could select a color and when you clicked a cell in
the grid it would change to that color.

Once I did that, I wanted it to function a little bit more like Microsoft
Paint, so I set up a variable pointerIsDown. When it detects a pointerdown
event, it flips the variable to true, and then every time the grid divs detect
a mouseover event, it checks that variable. If true, it changes the color, that
way instead of having to click each cell you can just click down and then drag
across the screen.
