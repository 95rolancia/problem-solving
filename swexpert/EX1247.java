import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.StringTokenizer;
/*
 *  ����
 */
public class EX1247 {	
	static int stoi(String str) { return Integer.parseInt(str);}
	static int T, N;

	static ArrayList<Location> customers;
	static Location house;
	static Location company;
	
	
	static class Location implements Comparable<Location> {
		int x, y;
		public Location(int x, int y) {
			this.x = x;
			this.y = y;
		}

		@Override
		public int compareTo(Location o) {
			int diff = (Math.abs(o.x - house.x) + Math.abs(o.y - house.y)) - 
			(Math.abs(this.x - house.x) + Math.abs(this.y - house.y));
			
			if(diff != 0) return diff;
			else return (Math.abs(this.x - company.x) + Math.abs(this.y - company.y)) - (Math.abs(o.x - company.x) + Math.abs(o.y - company.y));
		}

		@Override
		public String toString() {
			return "Location [x=" + x + ", y=" + y + "]";
		}
		
	}

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = null;

		T = Integer.parseInt(br.readLine());
		for(int tc = 1; tc <= T; tc++) {
			N = Integer.parseInt(br.readLine());
			customers = new ArrayList<Location>();
			
			st = new StringTokenizer(br.readLine(), " ");
			
			company = new Location(stoi(st.nextToken()), stoi(st.nextToken()));
			house = new Location(stoi(st.nextToken()), stoi(st.nextToken()));
			
			for(int i = 0; i < N; i++) {
				customers.add(new Location(stoi(st.nextToken()), stoi(st.nextToken()))); 
			}
			
			Collections.sort(customers);
			
//			for(int i = 0; i < N; i++) {
//				System.out.println(customers.get(i).toString());
//			}
			
			int startX = company.x;
			int startY = company.y;
			int distance = 0;
			for(int i = 0; i < N; i++) {
				distance += (Math.abs(customers.get(i).x - startX) + Math.abs(customers.get(i).y - startY));
				startX = customers.get(i).x;
				startY = customers.get(i).y;
//				System.out.println(distance);
			}
			distance += (Math.abs(house.x - startX) + Math.abs(house.y - startY));
		
			System.out.println("#" + tc + " " + distance);
		}
	}
}