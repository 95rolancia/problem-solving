import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Boj1987 {	
	static int R, C;
	static int answer = Integer.MIN_VALUE;
	static boolean[] alphabet;
	static char map[][];
//	                                   상 하 좌 우
	static int[] dx = {-1, 1, 0, 0};
	static int[] dy = {0, 0, -1, 1};

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine(), " ");
		R = Integer.parseInt(st.nextToken());
		C = Integer.parseInt(st.nextToken());
		map = new char[R + 1][C + 1];
			
		for(int i = 1; i <= R; i++) {
			String str = br.readLine();
			for(int j = 1; j <= C; j++) {
				map[i][j] = str.charAt(j - 1);
			}
		}
		
		alphabet = new boolean[26];
		alphabet[map[1][1] - 'A'] = true;
		backtracking(1, 1, alphabet, 1);
		System.out.println(answer);
	}
	
	static void backtracking(int x, int y, boolean[] alpha, int cnt) {	
		for(int i = 0; i < 4; i++) {		
			int mx = x + dx[i];
			int my = y + dy[i];
			
			if(mx > R || my > C || mx < 1 || my < 1) continue;
			if(alpha[map[mx][my] - 'A']) {
				answer = Math.max(cnt, answer);
				continue;
			}
			
			alpha[map[mx][my] - 'A'] = true;
			backtracking(mx, my, alpha, cnt + 1);
			alpha[map[mx][my] - 'A'] = false;				
		}
	}
}