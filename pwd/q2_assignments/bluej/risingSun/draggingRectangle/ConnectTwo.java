import objectdraw.*;
import java.awt.*;

// A program that displays the words "Pressed" and "Released"
// where the mouse button is pressed and released while connecting
// each such pair of points with a line.
public class ConnectTwo extends WindowController{

    private Location firstPoint;
    private FramedRect rectangle;
    // The location where button was pressed
   //DrawingCanvas canvas;
        
    // Display "Pressed" when the button is pressed.
    public void onMousePress(Location pressPoint){
        //new Text("Pressed", pressPoint, canvas);
        firstPoint = pressPoint;
        rectangle = new FramedRect(firstPoint, 0, 0, canvas);
        
    }
    
    public void onMouseDrag(Location p)
    {
        rectangle.removeFromCanvas();
        rectangle = new FramedRect(firstPoint, p, canvas);
       
    }

    // Display "Released" and draw a line from where the mouse
    // was last pressed.
    public void onMouseRelease(Location releasePoint){
        //new Text("Released", releasePoint, canvas);
        new FilledRect(firstPoint, releasePoint, canvas);
    }

}