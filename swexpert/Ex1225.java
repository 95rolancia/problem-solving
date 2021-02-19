import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Ex1225 {
	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		Queue<Integer> q = new LinkedList<>();
		
		for(int t = 0; t < 1; t++) {
			int order = Integer.parseInt(br.readLine());
			StringTokenizer st = null;
			st = new StringTokenizer(br.readLine(), " ");
			for(int i = 0; i < 8; i++) {
				q.offer(Integer.parseInt(st.nextToken()));
			}
			simulation(q);
			System.out.println("#" + order);
			for(Integer num : q) {
				System.out.printf("%d ", num);
			}
			System.out.println();
		}	
	}
	
	static void simulation(Queue<Integer> q) {
		int cnt = 1;
		while(true) {
			int temp = q.poll();
			temp = temp - cnt >= 0 ? temp - cnt : 0;
			q.offer(temp);
			if(temp == 0) break;
			if(++cnt == 6) cnt = 1;
		}
	}
}
