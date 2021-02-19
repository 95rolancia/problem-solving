import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;
/*
 * 규영이와 인영이의 카드게임
 */
public class Ex6808 {
	static int win = 0, lose = 0;
	static int[] gueyoung = new int[9]; 
	static int[] inyoung = new int[9];

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = null;
		int T = Integer.parseInt(br.readLine());
		for(int t = 1; t <= T; t++) {
			boolean[] used = new boolean[19];
			st = new StringTokenizer(br.readLine(), " ");
			for(int i = 0; i < 9; i++) {
				gueyoung[i] = Integer.parseInt(st.nextToken());
				used[gueyoung[i]] = true;
			}
			
			int cnt = 0;
			for(int i = 1; i <= 18; i++) {
				if(!used[i]) {
					inyoung[cnt++] = i;
				}
			}
			
			perm(inyoung, new int[9], new boolean[9], 0, 9, 9);
			
			System.out.println("#" + t + " " + win + " " + lose);
			win = 0;
			lose = 0;
		}
	}
	
	static void perm(int[] arr, int[] output, boolean[] visited, int depth, int n, int r) {
	    if (depth == r) {
	        simulation(output);
	        return;
	    }
	 
	    for (int i=0; i<n; i++) {
	        if (visited[i] != true) {
	            visited[i] = true;
	            output[depth] = arr[i];
	            perm(arr, output, visited, depth + 1, n, r);       
	            visited[i] = false;;
	        }
	    }
	}
	
	static void simulation(int[] output) {
		int result1 = 0, result2 = 0;
		for(int i = 0; i < 9; i++) {
			if(gueyoung[i] > output[i]) {
				result1 += (gueyoung[i] + output[i]);
			} else {
				result2 += (gueyoung[i] + output[i]);
			}
		}
		
		if(result1 > result2) {
			win++;
		} else {
			lose++;
		}
	}
}
