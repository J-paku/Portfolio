package chap6;
import java.util.Random;
public class MultiArrayTest1Copy {
public static void main(String[] args) {
	Random ran = new Random();
	int[][] score = new int[4][4];
	for(int i=0; i<score.length; i++) {
		for(int j=0; j<score.length; j++) {
			score[i][j] = ran.nextInt(100);
		}
	}
	
	for(int k=0; k<score.length; k++) {
		int sum=0;
		for(int result : score[k]) {
			System.out.print(result + " ");
			sum += result;
		}
		System.out.println("를 합한 값은 " + sum);
	}
}
}
