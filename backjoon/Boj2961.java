import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Boj2961 {
	static int diff = Integer.MAX_VALUE;
	
	static class Food{
		int s, b;
		public Food(int s, int b) {
			this.s = s;
			this.b = b;
		}
	}
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = null;
		int n = Integer.parseInt(br.readLine());
		Food[] foods = new Food[n];
		
		for(int i = 0; i < n; i++) {
			st = new StringTokenizer(br.readLine(), " ");
			int s = Integer.parseInt(st.nextToken());
			int b = Integer.parseInt(st.nextToken());
			foods[i] = new Food(s, b);
		}	
		
		powerSet(foods, new boolean[n], n, 0);
		System.out.println(diff);
	}
	
	static void powerSet(Food[] arr, boolean[] visited, int n, int idx) {
	    if(idx == n) {
	    	int cnt = 0;
	    	for(int i = 0; i < n; i++) {
	    		if(!visited[i]) cnt++;
	    	}
	    	if(cnt == n) return;
	    
	        int curDiff = getDiff(arr, visited, n);
	        diff = Math.min(curDiff, diff);
	        return;
	    }
	 
	    visited[idx] = false;
	    powerSet(arr, visited, n, idx + 1);
	 
	    visited[idx] = true;
	    powerSet(arr, visited, n, idx + 1);
	}
	
	static int getDiff(Food[] arr, boolean[] visited, int n) {
		int sumS = 1;
		int sumB = 0;
		for(int i = 0; i < n; i++) {
			if(visited[i]) {
				sumS *= arr[i].s;
				sumB += arr[i].b;
			
			}
		}
		return Math.abs(sumS - sumB);
	}
}
