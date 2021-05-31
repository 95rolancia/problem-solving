import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Boj1198 {
	static StringBuilder sb = new StringBuilder();
	static StringTokenizer st = null;
	static int result = -1;
	static int limit;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		st = new StringTokenizer(br.readLine(), " ");
		int n = Integer.parseInt(st.nextToken());
		int k = Integer.parseInt(st.nextToken());
		
		Queue<Integer> q = new LinkedList<Integer>();
		for(int i = 1; i <= n; i++) {
			q.add(i);
		}
	
		sb.append("<");
		while(!q.isEmpty()) {
			for(int i = 0; i < k - 1; i++) {
				q.add(q.remove());
			}
			sb.append(q.peek());
			if(q.size() != 1) {
				sb.append(", ");
			}
			q.remove();
		}

		sb.append(">");
		System.out.println(sb);
	}
}