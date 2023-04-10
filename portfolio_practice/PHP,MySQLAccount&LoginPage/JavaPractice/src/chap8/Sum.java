package chap8;
class Sum {
	int sum;
	
	public int allsum(int x, int y) {
		for (int i=x; i<=y; i++) {
			sum = sum+i;
		}
		return sum;
	}
	
	public int oddsum(int x, int y) {
		for (int i = x; i<=y; i++) {
			if(i%2 == 0) continue;
			sum = sum+i;
		}
		return sum;
	}
	
	public int evensum(int x, int y) {
		for(int i=x; i<=y; i++) {
			if(i%2 == 1) continue;
			sum += i;
		}
		return sum;
	}
}
