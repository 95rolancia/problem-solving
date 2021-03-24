import java.io.*;
import java.util.*;
/*
 * 백준 2577번 최댓값 - 숫자의 개수
 */
public class Boj2577 {
	private static final BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	private static final BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	private static int stoi(String str) { return Integer.parseInt(str);}
	
	public static void main(String[] args) throws IOException {	
		int multi = 1;
		for(int i = 0; i < 3; i++) {
			multi *= stoi(br.readLine());
		}
		
		int[] cnt = new int[10];
		String multiToStr = Integer.toString(multi);
		for(int i = 0; i < multiToStr.length(); i++) {
			cnt[multiToStr.charAt(i) - '0']++;
		}
		
		StringBuilder sb = new StringBuilder();
		for(int i = 0; i < 10; i++) {
			sb.append(cnt[i] + "\n");
		}
		
		bw.write(sb.toString());
		bw.close();
		br.close();
	}
}