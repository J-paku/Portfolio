package chap7;

class MultiDiv extends PlusMinus {
	int multi;
	private double div;
	
	public String multi(int x, int y) {
		multi = x * y;
		return ""+multi;
	}
	public String div(int x, int y) {
		div = (double)x / y;
		return ""+div;
	}
}

public class Encapsulation {
	public static void main(String args[]) {
		String plus,minus,multi,div;
		MultiDiv ob1 = new MultiDiv();
		
		multi = ob1.multi(50,30);
		div = ob1.div(50, 30);
		System.out.println(multi);
		System.out.println(div);
		
	}
}
