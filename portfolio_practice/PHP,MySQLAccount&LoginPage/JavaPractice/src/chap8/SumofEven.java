package chap8;
import java.util.Scanner;

public class SumofEven {
public static void main(String args[]) {	
	Scanner stdin = new Scanner(System.in);
	System.out.print("두 수를 입력하세요: ");
	int n = stdin.nextInt();
	int m = stdin.nextInt();
	Sum s = new Sum();
	
	System.out.print(n+" 부터 "+m+" 까지의 짝수 합은 : "+s.evensum(n, m));
}
}
