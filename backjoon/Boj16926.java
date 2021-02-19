import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class Boj16926 {
	static class Location{
		int x, y;
		Location(int x, int y){
			this.x = x;
			this.y = y;
		}
	}
	
	static int n, m, r;
	static int map[][];
	static ArrayList<Location[]> locs = new ArrayList<>();
	static int[] dx = {1, 0, -1, 0};
	static int[] dy = {0, 1, 0, -1};

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		StringTokenizer st = null;
		
		st = new StringTokenizer(br.readLine(), " ");
		n = Integer.parseInt(st.nextToken());
		m = Integer.parseInt(st.nextToken());
		r = Integer.parseInt(st.nextToken());
		
		map = new int[n][m];
		for(int i = 0; i < n; i++) {
			st = new StringTokenizer(br.readLine(), " "); 
			for(int j = 0; j < m; j++) {
				map[i][j] = Integer.parseInt(st.nextToken());
			}
		}
		
		int bias = Math.min(n, m);
		getLocations(bias);

		for(int i = 0; i < r; i++) {
			rotate();
		}	
		
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
            	sb.append(map[i][j]).append(' ');
            }           
            sb.append('\n');
        } 
        System.out.println(sb.toString());
	}
	
	static void rotate() {
		for(int i = 0; i < locs.size(); i++) {
			Location[] locations = locs.get(i);
			int temp1 = map[locations[0].x][locations[0].y];
			for(int j = 1; j < locations.length; j++) {
				int temp2 = map[locations[j].x][locations[j].y];
				map[locations[j].x][locations[j].y] = temp1;
				temp1 = temp2;
			}
			map[locations[0].x][locations[0].y] = temp1;
		}
	}
	
	static void getLocations(int bias) {
		int width = m;
		int height = n;
		for(int i = 0; i < bias / 2; i++) {
			Location[] locations = new Location[2*height + 2*width - 4];
			int startX = i;
			int startY = i;
			
			int cnt = 0;
			int dir = 0;
			locations[cnt++] = new Location(startX, startY);
			
			int x = i;
			int y = i;

			while(true) {			
				int mx = x + dx[dir];
				int my = y + dy[dir];
				
				if(mx < 0 + i || my < 0 + i || mx >= n - i || my >= m - i) {
					dir++;
					dir %= 4;
					continue;
				}

				if(mx == startX  && my == startY) break;
				locations[cnt++] = new Location(mx, my);
				x = mx;
				y = my;				
			}
			
			locs.add(locations);
			width -= 2;
			height -= 2;
		}
	}
}
