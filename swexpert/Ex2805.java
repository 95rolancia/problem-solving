import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Ex2805 {
	static int[][] map;
	static int t, n, result;

	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		t = Integer.parseInt(br.readLine());

		for (int i = 0; i < t; i++) {
			result = 0;
			n = Integer.parseInt(br.readLine());
			map = new int[n][n];
			for(int j = 0; j < n; j++) {
				String nums = br.readLine();
				for(int k = 0; k < n; k++) {
					map[j][k] = (int)nums.charAt(k) - '0';
				}
			}
			go();
			System.out.printf("#%d %d", i + 1, result);
		}
	}

	static void go() {
		int center = n / 2;
		for (int i = 0; i < n; i++) {
			if (i <= center) {
				for (int j = center - i; j <= center + i; j++) {
					result += map[i][j];
				}
				
			} else {
				for (int j = i - center; j < n + center - i; j++) {
					result += map[i][j];
				}
			}
		}
	}
}