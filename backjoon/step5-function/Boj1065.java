import java.io.*;
import java.util.*;
/*
 * 백준 15596번 정수 N개의 합 - 브론즈 2
 */
public class Boj1065 {	
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int N = sc.nextInt();
		int cnt = 0;
		for(int i = 1; i < N + 1; i++) {
			if(i <= 99) cnt++;
			else {
				String arr = Integer.toString(i);
				int diff = arr.charAt(0) - arr.charAt(1);
				boolean keepGoing = true;
				for(int j = 1; j < arr.length() - 1; j++) {
					if(diff != arr.charAt(j) - arr.charAt(j + 1)) {
						keepGoing = false;
						break;
					}
				}
				if(keepGoing) cnt++;
			}
		}
		System.out.println(cnt);
	}
}
