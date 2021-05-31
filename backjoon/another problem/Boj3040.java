import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Boj3040 {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int[] heights = new int[9];
		
		for(int i = 0; i < 9; i++) {
			heights[i] = Integer.parseInt(br.readLine());
		}	
		
		comb(heights, new boolean[9], 0, 9, 7);
	}
	
	static void comb(int[] arr, boolean[] visited, int start, int n, int r) {
	    if(r == 0) {
	    	int sum = 0;
	    	for(int i = 0; i < n; i++) {
	    		if(visited[i]) sum += arr[i];
	    	}
	    	
	    	if(sum == 100) {
	    		for(int i = 0; i < n; i++) {
	    			if(visited[i]) System.out.println(arr[i]);
	    		}
	    	}
	        return;
	    }
	    
	    for(int i = start; i < n; i++) {
		    visited[i] = true;
		    comb(arr, visited, i + 1, n, r - 1);	 
		    visited[i] = false;
	
	    }
	}
}
