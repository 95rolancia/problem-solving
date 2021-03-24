import java.io.*;
import java.util.*;
/*
 * 백준 1046번 평균 - 브론즈 1
 */
public class Boj1546 {
	private static final BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	private static final BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	private static int stoi(String str) { return Integer.parseInt(str);}
	
	public static void main(String[] args) throws IOException {
		int N = stoi(br.readLine());
		int[] scores = new int[N];
		int maxScore = Integer.MIN_VALUE;
		
		StringTokenizer st = new StringTokenizer(br.readLine(), " ");
		for(int i = 0; i < N; i++) {
			scores[i] = stoi(st.nextToken());
			maxScore = Math.max(maxScore, scores[i]);
		}

		float sum = 0.0f;
		float newAver = 0.0f;
		for(int i = 0; i < N; i++) {
			sum += (double)scores[i] / maxScore * 100;
		}
		newAver = sum / N;

		bw.write(Float.toString(newAver));
		bw.close();
		br.close();
	}
}