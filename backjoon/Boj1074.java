import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;
/*
 * 분할정복 - Z
 */
public class Boj1074 {	
	static int N, r, c;
	static int count;
	static boolean check = false;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine(), " ");
		
		N = Integer.parseInt(st.nextToken());
		r = Integer.parseInt(st.nextToken());
		c = Integer.parseInt(st.nextToken());
		
		func(0, 0, 1 << N);
	}
	
	static void func(int y, int x, int size) {
		if(y > r || y+size <= r || x > c || x+size <= c) {
			count += (size * size);
			return;
		}
		
		if(y == r && x == c) {
			System.out.println(count);
			return;
		}
		
		int s = size / 2;

		func(y, x, s);
		func(y, x + s, s);
		func(y + s, x, s);
		func(y + s, x + s, s);
	}
}
