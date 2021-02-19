import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class Jungol1828 {
	static class Material implements Comparable<Material>{
		int minT, maxT;
		public Material(int minT, int maxT) {
			this.minT = minT;
			this.maxT = maxT;
		}
		
		@Override
		public int compareTo(Material m) {
			return this.maxT - m.maxT;
		}
	}
	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = null;
		int n = Integer.parseInt(br.readLine());
		Material[] m = new Material[n];

		for(int i = 0; i < n; i++) {
			st = new StringTokenizer(br.readLine(), " ");
			int minT = Integer.parseInt(st.nextToken());
			int maxT = Integer.parseInt(st.nextToken());
			m[i] = new Material(minT, maxT);
		}
		
		Arrays.sort(m);
		
		int answer = 1;
		int temp = m[0].maxT;
		
		for(int i = 1; i < n; i++) {
			if(temp < m[i].minT) {
				answer++;
				temp = m[i].maxT;
			}
		}
		
		System.out.println(answer);
	}
}
