import java.io.*;
import java.util.*;

public class Boj17135 {
	static int stoi(String str) {
		return Integer.parseInt(str);
	};

	static int N, M, D, kill = Integer.MIN_VALUE;
	static ArrayList<Location> animes = new ArrayList<Location>();
	static ArrayList<Location> copyAnimes;
	
	static ArrayList<Location> armies = new ArrayList<Location>();
	static class Location implements Comparable<Location>{
		int x, y;

		public Location(int x, int y) {
			this.x = x;
			this.y = y;
		}
//같은 거리에 있는 적 중 왼쪽에 있는 적부터 처리하기위해 정렬
		@Override
		public int compareTo(Location loc) {
			int diff = this.y - loc.y;
			return diff != 0 ? diff : loc.x - this.x;
		}

	}

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine(), " ");

		N = Integer.parseInt(st.nextToken());
		M = Integer.parseInt(st.nextToken());
		D = Integer.parseInt(st.nextToken());

		for (int i = 1; i <= N; i++) {
			st = new StringTokenizer(br.readLine(), " ");
			for (int j = 1; j <= M; j++) {
				int temp = stoi(st.nextToken());
				if (temp == 1) {
					animes.add(new Location(i, j));
				}
			}
		}
		
//		왼쪽에 있는 적부터 처리하기위해 정렬
		Collections.sort(animes);	
		comb(new boolean[M], 0, M, 3);
		System.out.println(kill);
	}

//	궁수 3명의 위치 조합
	static void comb(boolean[] visited, int start, int n, int r) {
		if (r == 0) {
			ArrayList<Location> hunters = new ArrayList<>();
			for (int i = 0; i < n; i++) {
				if (visited[i])
					hunters.add(new Location(N + 1, i + 1));
			}
//			animes 복사
			copy();
			simulation(hunters);
		}

		for (int i = start; i < n; i++) {
			visited[i] = true;
			comb(visited, i + 1, n, r - 1);
			visited[i] = false;
		}
	}

	static void simulation(ArrayList<Location> hunters) {
		int curKill = 0;
		while (copyAnimes.size() != 0) {
//			궁수 턴
			Set<Integer> animeLocs = new HashSet<>();
			for (int i = 0; i < 3; i++) {
				int dis = Integer.MAX_VALUE;
				int animeLoc = -1;
				Location hunter = hunters.get(i);
				
				for (int j = 0; j < copyAnimes.size(); j++) {
					int temp = calcDis(copyAnimes.get(j), hunter);	
					if (temp <= D) {
						if(temp < dis) {
							dis = temp;
							animeLoc = j;	
						}
					}
				}	
				
				if(animeLoc != -1) {
					animeLocs.add(animeLoc);
				}				
			}
			
			LinkedList<Integer> animeLocsList = new LinkedList<Integer>(animeLocs);
//			정렬 안하면 index out error
			Collections.sort(animeLocsList);
			
//			적 제거
			for(int i = 0; i < animeLocsList.size(); i++) {
				int target = animeLocsList.get(i);
				if(i == 0) {
					copyAnimes.remove(target);
				} else {
					copyAnimes.remove(target - i);
				}
				curKill++;
			}
			
			animeLocs = new HashSet<>();
//			적 턴
			for (int j = 0; j < copyAnimes.size(); j++) {
				copyAnimes.get(j).x++;
				if(copyAnimes.get(j).x > N) {
					animeLocs.add(j);
				}
			}
			
			animeLocsList = new LinkedList<Integer>(animeLocs);
//			정렬 안하면 index out error
			Collections.sort(animeLocsList);
			
//			성벽에 닿은 적 제거
			for(int i = 0; i < animeLocsList.size(); i++) {
				int target = animeLocsList.get(i);
				if(i == 0) {
					copyAnimes.remove(target);
				} else {
					copyAnimes.remove(target - i);
				}
			}
		}	
		kill = Math.max(curKill, kill);
	}

//	animes 복사
	static void copy() {
		copyAnimes = new ArrayList<Location>();
		for(int i = 0; i < animes.size(); i++) {
			Location temp = new Location(animes.get(i).x, animes.get(i).y);
			copyAnimes.add(temp);
		}
	}
	
//	궁수와 적과의 거리 계산
	static int calcDis(Location a, Location b) {
		return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
	}
}
