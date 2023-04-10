package chap8;
import java.util.Scanner;

public class sumofAll {
public static void main(String args[]) {
	Scanner stdin = new Scanner(System.in);
	Sum s = new Sum();
	System.out.println("두 개의 숫자 입력(왼쪽이 작은 수)");
	int n = stdin.nextInt();
	int m = stdin.nextInt();
	System.out.println(n+" 부터 "+m+" 까지의 합 " + +s.allsum(n, m));
}
}
