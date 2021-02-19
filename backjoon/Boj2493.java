import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;
import java.util.StringTokenizer;

public class Boj2493 {
	static class Tower {
		int index;
		int height;

		public Tower(int index, int height) {
			this.index = index;
			this.height = height;
		}
	}

	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		Stack<Tower> stk = new Stack<>();
		int numberOfTower = Integer.parseInt(br.readLine());
		StringBuilder sb = new StringBuilder();

		StringTokenizer st = null;
		st = new StringTokenizer(br.readLine(), " ");
		for (int i = 0; i < numberOfTower; i++) {
			int targetHeight = Integer.parseInt(st.nextToken());
			
			if (stk.empty()) {
				sb.append(0 + " ");
				stk.push(new Tower(i + 1, targetHeight));
			} else if (stk.peek().height > targetHeight) {
				sb.append(stk.peek().index + " ");
				stk.push(new Tower(i + 1, targetHeight));
			} else {
				while (!stk.empty() && stk.peek().height < targetHeight) {
					stk.pop();
				}
				if (stk.empty()) {
					sb.append(0 + " ");
				} else {
					sb.append(stk.peek().index + " ");
				}
				stk.push(new Tower(i + 1, targetHeight));
			}
		}
		System.out.println(sb);
	}
}
