package chap3;

public class CastingTest3 {
	public static void main(String[] args) {
		long l = 1234567890123456789L;
		float f = l;
		double d = l;
		System.out.println("원래의 long값 ");
		System.out.println("long >> float 변환 : " +f);
		System.out.println("long >> double 변환 : "+d);
		long fl = (long)f;
		long dl = (long)d;
		System.out.println("long >> float >> long으로 변환 : " + fl);
		System.out.println("long >> double >> long으로 변환 : " + dl);
	}
}
