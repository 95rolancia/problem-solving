import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;
/*
 *  빵집
 */
public class Boj3109 {	
	static int R, C;
	static int answer = 0;
	static char map[][];
//	직진, 대각선 위, 대각선 아래
	static int[] dx = {-1, 0, 1};
	static int[] dy = {1, 1, 1};

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
		
		for(int i = 1; i <= R; i++) {
			backtracking(i, 1);
		}
		System.out.println(answer);
	}
	
	static boolean backtracking(int x, int y) {	
        if(y == C - 1) {
		    answer++;
		    return true;
	    }
        
		for(int i = 0; i < 3; i++) {
			int mx = x + dx[i];
			int my = y + dy[i];
			
			if(mx > R || my > C || mx < 1 || my < 1) continue;
			if(map[mx][my] != '.') continue;
			
			map[mx][my] = (char)(answer + '0');
			if(backtracking(mx, my)) return true;
		}
		return false;
	}
}