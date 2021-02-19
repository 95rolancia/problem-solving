import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Ex1861 {
	static class Result{
		int start, cur, move;
		Result(int start, int cur, int move){
			this.start = start;
			this.cur = cur;
			this.move = move;
		}
	}
                     //  ╩С го аб ©Л
	static int[] dx = {-1, 1, 0, 0};
	static int[] dy = {0, 0, -1, 1};
	
	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = null;
		int tc = Integer.parseInt(br.readLine()) ;
		for (int i = 0; i < tc; i++) {
			int n = Integer.parseInt(br.readLine());
			int[][] map = new int[n][n];
			
			for(int j = 0; j < n; j++) {
				st = new StringTokenizer(br.readLine(), " ");
				for(int k = 0; k < n; k++) {
					map[j][k] = Integer.parseInt(st.nextToken()) ;
				}
			}
						
			Result result = new Result(0, 0, 1);
			for(int j = 0; j < n; j++) {
				for(int k = 0; k < n; k++) {
					Result newResult = new Result(map[j][k], map[j][k], 1);
					go(map, j, k, n, newResult);
					if(newResult.move > result.move) {
						result = newResult;
					} else if(newResult.move == result.move) {
						if(newResult.start < result.start) {
							result = newResult;
						}
					}
				}
			}	
			System.out.printf("#%d %d %d%n", i + 1, result.start, result.move);
		}		
	}
	
	static void go(int[][] map, int x, int y, int n, Result newResult) {	
		for(int i = 0; i < 4; i++) {
			int mx = x + dx[i];
			int my = y + dy[i];
			if(mx < 0 || my < 0 || mx >= n || my >= n) {
				continue;
			}
			if(map[mx][my] - newResult.cur != 1) {
				continue;
			}
			newResult.move += 1;
			newResult.cur = map[mx][my];
			go(map, mx, my, n, newResult);
			break;
		}
	}
}