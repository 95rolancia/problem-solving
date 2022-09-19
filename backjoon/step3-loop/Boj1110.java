import java.io.*;
import java.util.*;
/*
 * 더하기 사이클 - 브론즈 1
 */
public class Boj1110 {
	private static final BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	private static final BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	private static int stoi(String str) { return Integer.parseInt(str);}
	
	public static void main(String[] args) throws IOException {
		int N = stoi(br.readLine());
		int a, temp = N;
		int answer = 0;
		do {
			a = N % 10 + N / 10;
			N = N % 10 * 10 + a % 10;
			answer++;
		} while(N != temp);
		
		bw.write(Integer.toString(answer));
		bw.close();
		br.close();
	}
}
