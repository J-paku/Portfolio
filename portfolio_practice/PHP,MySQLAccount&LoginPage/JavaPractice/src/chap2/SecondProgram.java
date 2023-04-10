package chap2;

import java.util.Scanner;

public class SecondProgram {
	public static void main(String[] args) {
		Scanner stdIn = new Scanner(System.in);
		System.out.print("몇 번째 프로그램 입니까? : ");
		String s = stdIn.next();
		System.out.println(s + " 번째 프로그램");
	}
}
