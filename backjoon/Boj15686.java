import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.StringTokenizer;
/*
 * 치킨 배달
 */
public class Boj15686 {
	static int stoi(String str) {return Integer.parseInt(str);};
	static int N, M, minimumDistance = Integer.MAX_VALUE;
	static ArrayList<Location> locChicken;
	static ArrayList<Location> locHouse;
	static class Location {
		int x, y;
		public Location(int x, int y) {
			this.x = x;
			this.y = y;
		}
	}

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine(), " ");
		
		N = Integer.parseInt(st.nextToken());
		M = Integer.parseInt(st.nextToken());
		
		locChicken = new ArrayList<Location>();
		locHouse = new ArrayList<Location>();
		
		for(int i = 1; i <= N; i++) {
			st = new StringTokenizer(br.readLine(), " ");
			for(int j = 1; j <= N; j++) {
				int temp = stoi(st.nextToken());
				
				if(temp == 2) {
					locChicken.add(new Location(i, j));
				} else if(temp == 1) {
					locHouse.add(new Location(i, j));
				}
			}
		}
		comb(new boolean[locChicken.size()], 0, locChicken.size(), M);	
		System.out.println(minimumDistance);
	}
	
	static void comb(boolean[] visited, int start, int n, int r) {
		if(r == 0) {
			ArrayList<Location> chicken = new ArrayList<>();
			for(int i = 0; i < n; i++) {
				if(visited[i]) chicken.add(locChicken.get(i));
			}		
			findMinimumDistance(chicken);
		}
		
		for(int i = start; i < n; i++) {
			visited[i] = true;
			comb(visited, i + 1, n, r - 1);
			visited[i] = false;
		}
	}
	
	static void findMinimumDistance(ArrayList<Location> chicken) {
		int minimumDistanceTemp = 0;
		for(int i = 0; i < locHouse.size(); i++) {
			int chickenDistance = Integer.MAX_VALUE;
			for(int j = 0; j < chicken.size(); j++) {
				int temp = Math.abs(locHouse.get(i).x - chicken.get(j).x) +
						Math.abs(locHouse.get(i).y - chicken.get(j).y);
				chickenDistance = Math.min(chickenDistance, temp);
			}
			//System.out.printf("%d %d 에서부터의 최소 거리는? %d%n", locHouse.get(i).x, locHouse.get(i).y, chickenDistance);
			minimumDistanceTemp += chickenDistance;
		}
		
		minimumDistance = Math.min(minimumDistance, minimumDistanceTemp);
	}
}
