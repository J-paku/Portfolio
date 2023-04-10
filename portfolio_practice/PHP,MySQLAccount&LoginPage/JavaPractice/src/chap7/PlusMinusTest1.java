package chap7;

public class PlusMinusTest1 {
	public static void main(String args[]) {
		PlusMinus ob1 = new PlusMinus();
		int Plus,Minus;
		
		Plus = ob1.plus(50, 30);
		Minus = ob1.minus(50, 30);
		
		System.out.println(Plus);
		System.out.println(Minus); 
	}
}
