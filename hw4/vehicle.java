import java.util.*;
import java.io.*;
import java.lang.*;
import java.awt.*;
import javax.swing.*;
import java.awt.event.*;

public class vehicle 
{

	protected int position_x;
	protected int position_y;
	protected int speed_x;
	protected int speed_y;
	protected Color color;
	protected String name;

	public vehicle(String uname, int pos_x, int pos_y, int v_x, int v_y)
	{
		name = uname;
		position_x = pos_x;
		position_y = pos_y;
		speed_x = v_x;
		speed_y = v_y;
	}

	public void set_color(Color c)
	{
		color = c;
	}

	public void draw(Graphics g)
	{
		
	}
}