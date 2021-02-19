import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Ex7964 {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = null;
		
		int T = Integer.parseInt(br.readLine());
		for(int i = 1; i <= T; i++) {
			st = new StringTokenizer(br.readLine(), " ");
			int n = Integer.parseInt(st.nextToken());
			int limit = Integer.parseInt(st.nextToken());
			
			int[] cities = new int[n];
			st = new StringTokenizer(br.readLine(), " ");
			for(int j = 0; j < n; j++) {
				cities[j] = Integer.parseInt(st.nextToken());
			}
			
			int portal = 0;
			int go = 1;
			for(int j = 0; j < n; j++) {
				if(cities[j] == 1) {
					go = 1;
				} else {
					if(go < limit) {
						go++;
					} else {
						portal++;
						go = 1;
					}
				}
			}	
			System.out.println("#" + i + " " + portal);
		}
	}
}
