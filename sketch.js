
let myp5 = new p5(( sketch ) => { 

  console.log('Sketch');
  sketch.setup = () => {
      sketch.createCanvas(640, 480);
      console.log('Setup');
    }
    
  sketch.draw = () => {
      if (sketch.mouseIsPressed) {
        sketch.fill(0);
      } else {
        sketch.fill(255);
      }
      sketch.ellipse(sketch.mouseX, sketch.mouseY, 80, 80);
  }
  
} , document.getElementById('p5sketch'));