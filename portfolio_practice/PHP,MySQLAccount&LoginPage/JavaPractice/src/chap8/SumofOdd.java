package chap8;
import java.util.Scanner;

public class SumofOdd {
public static void main(String args[]) {
	int n,m;
	Scanner stdin = new Scanner(System.in);
	System.out.print("숫자 두 개를 입력하2시오(왼쪽이 작은 수) : ");
	n = stdin.nextInt();
	m = stdin.nextInt();
	Sum s = new Sum();
	System.out.println(n+" 부터 "+m+" 까지의 합은 "+s.oddsum(n, m));
}
}
