import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Ex1954 {
//    µ¿  ³²   ¼­   ºÏ
	static int[] dx = { 0, 1, 0, -1 };
	static int[] dy = { 1, 0, -1, 0 };

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int t = Integer.parseInt(br.readLine());
		for (int i = 0; i < t; i++) {
			int n = Integer.parseInt(br.readLine());
			int[][] snail = new int[n][n];
			fillSnail(snail, n);
			System.out.printf("#%d%n", t + 1);
			showSnail(snail, n);
		}
	}

	static void fillSnail(int[][] snail, int n) {
		int x = 0, y = 0, cnt = 1;
		while (cnt <= n * n) {
//right
			while (y < n && snail[x][y] == 0)
				snail[x][y++] = cnt++;
			x++;
			y--;

//down
			while (x < n && snail[x][y] == 0)
				snail[x++][y] = cnt++;
			x--;
			y--;

//left
			while (y >= 0 && snail[x][y] == 0)
				snail[x][y--] = cnt++;
			x--;
			y++;

//up
			while (x >= 0 && snail[x][y] == 0)
				snail[x--][y] = cnt++;
			x++;
			y++;
		}
	}

	static void showSnail(int[][] snail, int n) {
		for (int j = 0; j < n; j++) {
			for (int k = 0; k < n; k++) {
				System.out.printf("%d ", snail[j][k]);
			}
			System.out.println();
		}
	}
}
