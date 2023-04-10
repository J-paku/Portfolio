package chap5;
import java.util.Scanner;
public class YakuSuu {
	public static void main(String[] args) {
		Scanner stdin = new Scanner(System.in) ;
		System.out.print("知りたい約数の対象数字を入力してください：");
		int num1 = stdin.nextInt();
		System.out.print(num1+"の約数は：");
		
		for(int i=1;i<=num1;i++) {
			if(num1 % i == 0) {
				System.out.print(i+" ");
			}
		}
		}
}
