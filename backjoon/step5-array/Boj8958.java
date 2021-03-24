import java.io.*;
import java.util.*;
/*
 * 백준 8958번 OX 퀴즈 - 브론즈 2
 */
public class Boj8958 {
	private static final BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	private static final BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	private static int stoi(String str) { return Integer.parseInt(str);}
	
	public static void main(String[] args) throws IOException {
		int T = stoi(br.readLine());
		StringBuilder sb = new StringBuilder();
		for(int tc = 0; tc < T; tc++) {
			String result = br.readLine();
			int score = 0;
			int cnt = 1;
			for(int i = 0; i < result.length(); i++) {
				int cur = result.charAt(i);
				if(cur == 'O') {
					score += cnt++;
				} else if(cur == 'X') {
					cnt = 1;
				}
			}
			sb.append(score + "\n");
		}
		bw.write(sb.toString());
		bw.close();
		br.close();
	}
}