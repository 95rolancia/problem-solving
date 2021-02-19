
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Ex9229 {
	static StringBuilder sb = new StringBuilder();
	static StringTokenizer st = null;
	static int result = -1;
	static int limit;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int tc = Integer.parseInt(br.readLine());

		for (int t = 1; t <= tc; t++) {
			st = new StringTokenizer(br.readLine(), " ");
			int n = Integer.parseInt(st.nextToken());
			int[] snacks = new int[n];
			limit = Integer.parseInt(st.nextToken());
			
			st = new StringTokenizer(br.readLine(), " ");
			for(int i = 0; i < n; i++) {
				snacks[i] = Integer.parseInt(st.nextToken());
			}
			
			boolean[] visited = new boolean[n];
			
			Arrays.fill(visited, false);
			combi(snacks, visited, 0, n, 2);
			System.out.print("#" + t + " ");
			System.out.println(result);
			
			result = -1;
		}
	}
	
	static void combi(int[] snacks, boolean[] visited, int start, int n, int r) {
		if(r == 0) {
			int sum = 0;
			for(int i = 0; i < n; i++) {
				if(visited[i]) sum += snacks[i];
			}
			
			if(sum <= limit) {
				result = Math.max(sum, result);
			}
			return;
		}
		
		for(int i = start; i < n; i++) {
			visited[i] = true;
			combi(snacks, visited, i + 1, n, r - 1);
			visited[i] = false;
		}
		
	}
}
