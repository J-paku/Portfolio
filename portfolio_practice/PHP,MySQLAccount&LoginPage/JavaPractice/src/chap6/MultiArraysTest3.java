package chap6;

public class MultiArraysTest3 {
public static void main(String[] args) {
	int[][][] threeD = new int[3][4][5]; // new int 는 실제 행 열을 입력 해야함!
	int i,j,k,count=11;
	for(i=0; i<threeD.length; i++) 
	{
		for(j=0; j<threeD[i].length; j++)
		{
			for(k=0; k<threeD[i][j].length; k++)
			{
				threeD[i][j][k] = count;
				count++;
			}
		}
	}
	
	System.out.println(threeD[2][3][4]);
	
	for(i=0; i<threeD.length; i++)
	{
		System.out.println((i+1)+"번 째 행입니다.");
		for(j=0; j<threeD[i].length; j++)
		{
			for(int val : threeD[i][j])
			{
				System.out.print(val + " ");
			}
			System.out.println();
		}
		System.out.println();
	}
}
}