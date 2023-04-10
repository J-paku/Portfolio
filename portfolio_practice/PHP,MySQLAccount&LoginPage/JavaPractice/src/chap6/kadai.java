package chap6;
import java.util.Random;
public class kadai {
public static void main(String[] args) {
	Random ran = new Random();
	int[][][] student = new int[3][7][10];
	int max=0,min=0,subtotal=0; // クラス
	int cmax=0,cmin=0,total=0; // 学校
	int i,j,k;
	double avg=0.0, cavg=0.0;
	
	for(i=0; i<student.length; i++) 
	{
		for(j=0; j<student[i].length; j++)
		{	
			for(k=0; k<student[i][j].length; k++)
			{
				student[i][j][k] = ran.nextInt(101);
				total += student[i][j][k];
				
				
				if(min > student[i][j][k])
				{
					min = student[i][j][k];
				}
				if(max < student[i][j][k]) 
				{
					max = student[i][j][k];
				} //　学校全員
				
				subtotal += student[i][j][k];
				
				if(cmin > student[i][j][k])
				{
					cmin = student[i][j][k];
				}
				if(cmax < student[i][j][k]) 
				{
					cmax = student[i][j][k];
				} //クラス別
			}
			cavg = (double)subtotal / (10);
			System.out.println((i+1)+"年"+(j+1)+"組の平均は"+ cavg + "　最高点数:　" + cmax + " 最低点数： "+cmin);
			subtotal = 0;
			cmin = 1000;
			cmax = 0;
		}
	}
	avg = (double)total / (3*7*10);
	System.out.println("学校全員の平均点数は：　"+avg+"　最高点数は：　"+max+" 最低点数は：　"+min);
}
}