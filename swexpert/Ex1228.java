
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.StringTokenizer;

public class Ex1228 {
	static StringBuilder sb = new StringBuilder();
	static StringTokenizer st = null;
	static int cnt = 0;

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		for (int t = 1; t <= 10; t++) {
			int n = Integer.parseInt(br.readLine());
			LinkedList<Integer> passwords = new LinkedList<Integer>();

			st = new StringTokenizer(br.readLine(), " ");
			for (int i = 0; i < n; i++) {
				passwords.add(Integer.parseInt(st.nextToken()));
			}

			int m = Integer.parseInt(br.readLine());

			st = new StringTokenizer(br.readLine(), " I");
			for (int i = 0; i < m; i++) {
				int idx = Integer.parseInt(st.nextToken());
				int cnt = Integer.parseInt(st.nextToken());
				for (int j = 0; j < cnt; j++) {
					passwords.add(idx + j, Integer.parseInt(st.nextToken()));
				}

			}

			System.out.print("#" + t + " ");
			for (int i = 0; i < 10; i++) {
				System.out.print(passwords.get(i) + " ");
			}
			System.out.println();
		}
	}
}
