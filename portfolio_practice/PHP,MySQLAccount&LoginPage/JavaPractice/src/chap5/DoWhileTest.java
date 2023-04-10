package chap5;
import java.util.Scanner;

public class DoWhileTest {
	public static void main(String[] args) {
		Scanner stdin = new Scanner(System.in);
		int month;
		do {
			System.out.print("何月か入力してください（終了は０入力） : ");
			month = stdin.nextInt();
			if (3 <= month &&  month <= 5) 
				System.out.println("春です");
			
			else if (6 <= month && month <= 8) 
				System.out.println("夏です");
			
			else if (9 <= month && month <= 11) 
				System.out.println("秋です");
			
			else if (1 == month ||  2 == month || 12 == month) 
				System.out.println("冬です");
			
			else if (month != 0)
				System.out.println("間違えてる値です。：該当する季節が無いです");
			} while ( month != 0 ); 
		System.out.println("감사합니다");
	}
}
