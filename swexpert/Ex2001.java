import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Ex2001 {
	static int[][] map;
	static int t, n, m, result;

	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st;
		t = Integer.parseInt(br.readLine());

		for (int i = 0; i < t; i++) {
			result = Integer.MIN_VALUE;
			st = new StringTokenizer(br.readLine());
			n = Integer.parseInt(st.nextToken());
			m = Integer.parseInt(st.nextToken());
			map = new int[n][n];
			for(int j = 0; j < n; j++) {
				st = new StringTokenizer(br.readLine(), " ");
				for(int k = 0; k < n; k++) {
					map[j][k] = Integer.parseInt(st.nextToken());
				}
			}
			go();
			System.out.printf("#%d %d", i + 1, result);
		}
	}

	static void go() {
		for(int i = 0; i <= n - m; i++) {
			for(int j = 0; j <= n - m; j++) {
				int sum = 0;
				for(int k = i; k < m + i; k++) {
					for(int l = j; l < m + j; l++) {
						sum += map[k][l];
					}
				}
				result = Math.max(sum, result);
			}		
		}
	}
}