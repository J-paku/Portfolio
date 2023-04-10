package chap7;

class MultiDivTest extends PlusMinus {
	int multi;
	double div;
	
	public int multi(int x, int y) {
		multi = x * y;
		return multi;
	}
	public double div(int x, int y) {
		div = (double)x / y;
		return div;
	}
	
}

public class FourRulesTest1{
	public static void main(String args[]) {
		MultiDivTest ob1 = new MultiDivTest();
		int Multi ,Plus ,Minus;
		double Div;
		
		Multi = ob1.multi(50, 30);
		Plus = ob1.plus(50, 30);
		Minus = ob1.minus(50, 30);
		Div = ob1.div(50, 30);
		
		System.out.print(Plus + " " + Minus+ " " +Multi+ " " +Div);
	}
}