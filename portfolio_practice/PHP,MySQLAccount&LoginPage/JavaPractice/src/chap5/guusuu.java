package chap5;
import java.util.Scanner;

public class guusuu {
public static void main(String[] args) {
	Scanner stdin = new Scanner(System.in);
	System.out.print("숫자를 입력하세요: ");
	int num1 = stdin.nextInt();
	int i, sum=0;
	
	for(i=1;i<=num1;i++) {
		if(i%2==1) continue;
		sum += i;
	}
	System.out.print(num1+"까지 짝수의 합 = "+sum);
}
}
