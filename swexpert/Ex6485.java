import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;
/*
 * 삼성시의 버스 노선
 */
public class Ex6485 {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = null;
		//st = new StringTokenizer(br.readLine(), " ");
		int T = Integer.parseInt(br.readLine());
		for(int i = 1; i <= T; i++) {
			int n = Integer.parseInt(br.readLine());
			int[][] routes = new int[n][2];
			for(int j = 0; j < n; j++) {
				st = new StringTokenizer(br.readLine(), " ");
				routes[j][0] = Integer.parseInt(st.nextToken());
				routes[j][1] = Integer.parseInt(st.nextToken());
			}
			
			int p = Integer.parseInt(br.readLine());
			System.out.print("#" + i + " ");
			for(int j = 0; j < p; j++) {
				int busstop = Integer.parseInt(br.readLine());
				int cnt = 0;
				for(int k = 0; k < n; k++) {
					if(routes[k][0] <= busstop && busstop <= routes[k][1]) {
						cnt++;
					}
				}
				System.out.print(cnt + " ");			
			}
		}
	}
}
