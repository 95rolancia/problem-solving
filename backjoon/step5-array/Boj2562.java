import java.io.*;
import java.util.*;
/*
 * 백준 2562번 최댓값 - 브론즈 2
 */
public class Boj2562 {
	private static final BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	private static final BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	private static int stoi(String str) { return Integer.parseInt(str);}
	
	public static void main(String[] args) throws IOException {	
		int max = Integer.MIN_VALUE;
		int maxIdx = -1;
		for(int i = 1; i < 10; i++) {
			int curNum = stoi(br.readLine());
			if(max < curNum) {
				max = curNum;
				maxIdx = i;
			}
		}
		
		bw.write(max + "\n" + maxIdx);
		bw.close();
		br.close();
	}
}