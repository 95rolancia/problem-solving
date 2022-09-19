import java.io.*;
import java.util.*;

/*
 * 백준 4673번 셀프 넘버 - 브론즈 1
 */
public class Boj4673 {
	private static final BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

	public static void main(String[] args) throws IOException {
		HashSet<Integer> set1 = new HashSet<>();
		HashSet<Integer> set2 = new HashSet<>();

		for (int i = 1; i <= 10000; i++) {
			set1.add(i);
		}

		for (int i = 1; i <= 10000; i++) {
			String temp = Integer.toString(i);
			int cur = i;
			for (int j = 0; j < temp.length(); j++) {
				cur += (temp.charAt(j) - '0');
			}
			set2.add(cur);		
		}

		set1.removeAll(set2);
		for (int n : set1) {
			System.out.println(n);
		}
		br.close();
	}
}