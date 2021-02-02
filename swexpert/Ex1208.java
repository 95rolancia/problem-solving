import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Ex1208 {
	static int dumpNum;
	static int[] dumps;
	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		for(int i = 0; i < 10; i++) {
			dumpNum = Integer.parseInt(br.readLine());
			dumps = new int[100];
			StringTokenizer st = new StringTokenizer(br.readLine(), " ");
			for(int j = 0; j < 100; j++) {
				dumps[j] = Integer.parseInt(st.nextToken());
			}
			
			Arrays.sort(dumps);
			for(int j = 0; j < dumpNum; j++) {		
				dumps[0] += 1;
				dumps[99] -= 1;
				bubbleSort(dumps);		
			}			
			
			int diff = dumps[99] - dumps[0];
			System.out.println(diff);
		}
	}
	
	public static void bubbleSort(int[] arr) {
	    for(int i = 0; i < arr.length; i++) {
	        for(int j = 0 ; j < arr.length - i - 1 ; j++) {
	            if(arr[j] > arr[j+1]) {
	                int temp = arr[j+1];
	                arr[j+1] = arr[j];
	                arr[j] = temp;
	            }
	        }
	    }
	}
}