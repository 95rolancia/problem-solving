import java.io.*;
import java.util.*;
/*
 * 백준 10818번 최소, 최대 - 브론드 3
 */
public class Boj10818 {
	private static final BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	private static final BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	private static int stoi(String str) { return Integer.parseInt(str);}
	
	public static void main(String[] args) throws IOException {
		int N = stoi(br.readLine());
		
		StringTokenizer st = new StringTokenizer(br.readLine(), " ");
		int min = Integer.MAX_VALUE;
		int max = Integer.MIN_VALUE;
		for(int i = 0; i < N; i++) {
			int curNum = stoi(st.nextToken());
			min = Math.min(min, curNum);
			max = Math.max(max, curNum);
		}
		
		bw.write(min + " " + max);
		bw.close();
		br.close();
	}
}
