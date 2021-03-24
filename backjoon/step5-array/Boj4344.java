import java.io.*;
import java.util.*;
/*
 * 백준 4344번 평균은 넘겠지 - 브론즈 1
 */
public class Boj4344 {
	private static final BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	private static int stoi(String str) { return Integer.parseInt(str);}
	
	public static void main(String[] args) throws IOException {
		int T = stoi(br.readLine());
		StringTokenizer st = null;
		
		for(int tc = 0; tc < T; tc++) {
			st = new StringTokenizer(br.readLine(), " ");
			int N = stoi(st.nextToken());
			int[] scores = new int[N];
			
			int sum = 0;
			for(int i = 0; i < N; i++) {
				scores[i] = stoi(st.nextToken());
				sum += scores[i];
			}
			
			float aver = (float)sum / N;

			int cnt = 0;
			for(int i = 0; i < N; i++) { 
				if(scores[i] > aver) cnt++;
			}

			System.out.printf("%.3f%%%n", Math.round((float)cnt / N * 100 * 1000) / 1000.0);

		}
		br.close();
	}
}