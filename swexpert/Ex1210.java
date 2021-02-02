import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Ex1210 {
	static int[][] ladder = new int[100][100];
//	               up,left,right
	static int[] dy = {-1, 1, 0};
	static int[] dx = {0, 0, -1};
	static int targetY;
	
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = null;
		for(int t = 0; t < 1; t++) {
			st = new StringTokenizer(br.readLine()); 
			int level = Integer.parseInt(st.nextToken());
			for(int i = 0; i < 100; i++) {
				st = new StringTokenizer(br.readLine(), " ");
				for(int j = 0; j < 100; j++) {
					ladder[i][j] = Integer.parseInt(st.nextToken());
					if(ladder[i][j] == 2) {
						targetY = j;
					}
				}					
			}
			search(99, targetY, level);
		}	
	}
	
	static void search(int x, int y, int level) {
		for(int i = 0; i < 3; i++) {
			int mx = x + dx[i];
			int my = y + dy[i];
			if(mx < 0 || my < 0 || mx >= 100 || my >= 100 || ladder[mx][my] == 0) continue;
			if(mx == 0 && ladder[mx][my] == 1) {
				System.out.printf("%n%n#%d %d%n", level, my);
				return;
			}
			System.out.printf("Å½»ö x: %d | y: %d%n", mx, my);
			ladder[mx][my] = 0;
			search(mx, my, level);
			ladder[mx][my] = 1;
			break;
		}
	}
}
