import java.io.*;
import java.util.*;
/*
 * A + B - 5
 */
public class Boj10952 {
	private static final BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	private static final BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	private static int stoi(String str) { return Integer.parseInt(str);}
	
	static int A, B;
	public static void main(String[] args) throws IOException {
		StringTokenizer st = null;
		StringBuilder sb = new StringBuilder();
		while(true) {
			st = new StringTokenizer(br.readLine(), " ");
			if(st == null) break;
			A = stoi(st.nextToken());
			B = stoi(st.nextToken());
			int sum = A + B;
			if(sum == 0) break;
			sb.append(sum + "\n");
		}
		
		bw.write(sb.toString());
		bw.close();
		br.close();
	}
}
