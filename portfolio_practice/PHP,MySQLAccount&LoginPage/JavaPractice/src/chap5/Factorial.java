package chap5;
import java.util.Scanner;

public class Factorial {
	public static void main(String[] args) {
		int i, facResult=1;
		Scanner stdin = new Scanner(System.in);
		System.out.print("숫자를 입력해주세요: ");
		int fac = stdin.nextInt();
		
		for(i=fac; i>=2; i--) {
			System.out.print(i+" * ");
			facResult *= i;
		}
		System.out.print("1 = " + facResult);
	}
}
