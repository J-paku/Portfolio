package chap2;
import java.util.Scanner;
public class KeyboardInput2 {
	public static void main(String[] args) {
		Scanner stdIn = new Scanner(System.in);
		System.out.print("이름, 나이, 몸무게를 스페이스로 구분지어 입력해주세여");
		String name = stdIn.next();
		int i = stdIn.nextInt();
		double d = stdIn.nextDouble();
		
		System.out.println(name + "님의 나이는" + i + "이고, ");
		System.out.println("몸무게는 " + d + "kg 입니다.");
	}
}