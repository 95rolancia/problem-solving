import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Ex5215 {
//	limit를 만족하는 foods의 taste 합
	static ArrayList<Integer> result = new ArrayList<>();
	
	static class Food {
		int taste;
		int calory;
		Food(int taste, int calory){
			this.taste = taste;
			this.calory = calory;
		}
	}
	
	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = null;
	
		int tc = Integer.parseInt(br.readLine());
		for (int i = 0; i < tc; i++) {	
			st = new StringTokenizer(br.readLine(), " ");
			int n = Integer.parseInt(st.nextToken());
			int l = Integer.parseInt(st.nextToken());
			
			Food[] foods = new Food[n];
			for(int j = 0; j < n; j++) {
				st = new StringTokenizer(br.readLine(), " ");
				int taste = Integer.parseInt(st.nextToken());
				int calory = Integer.parseInt(st.nextToken());
				foods[j] = new Food(taste, calory);
			}
			
			boolean visited[] = new boolean[n];
			Arrays.fill(visited, false);
			
			simulation(foods, visited, n, 0, l);
			
			int max = Integer.MIN_VALUE;
			for(int j = 0; j < result.size(); j++) {
				max = Math.max(max, result.get(j));
			}
			
			System.out.printf("#%d %d%n", i + 1, max);
			result.clear();
		}		
	}
	
//	power set
	static void simulation(Food[] foods, boolean[] visited, int n, int idx, int l) {
	    if(idx == n) {
	    	check(foods, visited, n, l);       
	        return;
	    }
	 
	    visited[idx] = false;
	    simulation(foods, visited, n, idx + 1, l);
	 
	    visited[idx] = true;
	    simulation(foods, visited, n, idx + 1, l);
	}
	
//	limit를 넘으면 return하고 그렇지 않으면 result에 add
	static void check(Food[] foods, boolean[] visited, int n, int l) {
		int taste = 0;
		int calory = 0;
		for(int i = 0; i < n; i++) {
			if(visited[i]) {
				taste += foods[i].taste;
				calory += foods[i].calory;
			}
			if(calory > l) return;
		}
		result.add(taste);
	}
}
