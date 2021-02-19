import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Boj2563 {
	static StringBuilder sb = new StringBuilder();
	static StringTokenizer st = null;
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int n = Integer.parseInt(br.readLine());
		int[][] paper = new int[100][100];
		for(int[] row : paper) {
			Arrays.fill(row, 0);
		}
		
		int result = 0;
		for(int i = 0; i < n; i++) {
			st = new StringTokenizer(br.readLine(), " ");
			int left = Integer.parseInt(st.nextToken());
			int bottom = Integer.parseInt(st.nextToken());
			
			for(int x = left; x < left + 10; x++) {
				for(int y = bottom; y < bottom + 10; y++) {
					if(paper[x][y] == 0) {
						paper[x][y] = 1;
						result++;
					}
				}
			}
		}
		
		System.out.println(result);
	}
}