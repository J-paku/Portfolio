package chap6;
import java.util.Random;

public class kadaiOsarai {
public static void main(String[] args) {
	Random ran = new Random();
	int i,j,k;
	int[][][] student = new int[3][7][10];
	int max=0,min=1000,total=0;
	int cmax=0,cmin=1000,ctotal=0;
	double avg=0.0, cavg=0.0;f
	
	for(i=0; i<student.length; i++)
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
					}
					
				ctotal += student[i][j][k];
					if(cmin > student[i][j][k])
					{
						cmin = student[i][j][k];
					}
					if(cmax < student[i][j][k])
					{
						cmax = student[i][j][k];
					}
			}
			cavg = ctotal / 10;
			
			System.out.println((i+1)+"학년 "+(j+1)+"반의 최고 점: "+cmax+", 최저 점: "+cmin+", 평균 : "+cavg);
			ctotal =0;
			cmax = 0;
			cmin = 1000;
		}
	
		avg = (double)total / (3*7*10);
		System.out.print("학교 최고 점:"+max+", 최저 점:"+min+", 평균:"+String.format("%.2f", avg));
}
}
