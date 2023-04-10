package chap6;
import java.util.Random;
public class bubbleSort {
public static void main(String[] args) {
	Random ran = new Random();
	int i,j,temp=0;
	int[] num1 = new int[10];
	
	for(i=0; i<num1.length; i++)
	{
		num1[i] = ran.nextInt(100);
	}
	
	for(i=0; i<num1.length; i++) 
			for(j=0; j<num1.length-i-1; j++)
			{
				if(num1[j] > num1[j+1])
				{
					temp = num1[j];
					num1[j] = num1[j+1];
					num1[j+1] = temp;
				}
			}
	
	for(i=0; i<num1.length; i++) {
		System.out.print(num1[i]+" ");
	}
	}
}
