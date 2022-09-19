import java.io.*;
import java.util.*;
/*
 * 백준 3052번 나머지 - 브론즈 2
 */
public class Boj3052 {
	private static final BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	private static final BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	private static int stoi(String str) { return Integer.parseInt(str);}
	
	public static void main(String[] args) throws IOException {
		TreeSet<Integer> set = new TreeSet<>();
		for(int i = 0; i < 10; i++) {
			set.add(stoi(br.readLine()) % 42);
		}

		bw.write(Integer.toString(set.size()));
		bw.close();
		br.close();
	}
}