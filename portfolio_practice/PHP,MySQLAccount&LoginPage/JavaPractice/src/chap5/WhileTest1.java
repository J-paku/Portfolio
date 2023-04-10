package chap5;

public class WhileTest1 {
	public static void main(String[] args) {
		int hap=0, count=1;
		while (count <= 10) {
			hap += count;
			count++;
		} // 0ª«ªéã·ªáª¿
		System.out.println("hap : " + hap + " count : " + count);
	}
}
