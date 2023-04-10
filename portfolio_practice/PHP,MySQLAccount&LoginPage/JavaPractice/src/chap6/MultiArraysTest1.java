package chap6;
import java.util.Random;
public class MultiArraysTest1 {
public static void main(String[] args) {
	Random ran = new Random();
	int[][] score = new int[4][4];
	for(int i=0; i<score.length; i++)
		for (int j=0; j<score.length; j++)
			score[i][j] = ran.nextInt(10);

		for (int k=0; k<=score.length; k++) {
			int sum=0;
			for(int value : score[k]) { // 이 부분 확실하게 알기
				System.out.print(value +" ");
				sum += value;
		}
			System.out.println("의 합계는 " +sum);
		}
}
}