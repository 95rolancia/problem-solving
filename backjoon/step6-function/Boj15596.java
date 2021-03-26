import java.io.*;
import java.util.*;
/*
 * 백준 15596번 정수 N개의 합 - 브론즈 2
 */
public class Boj15596 {	
	private static long sum(int[] a) {
		long sum = 0;
		for(int i = 0; i < a.length; i++) {
			sum += a[i];
		}
		return sum;
	}
}
