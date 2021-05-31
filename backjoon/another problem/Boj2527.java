import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Boj2527 {
	static int map[][];

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = null;
		
		for(int i = 0; i < 4; i++) {
			st = new StringTokenizer(br.readLine(), " ");
			int x1 = Integer.parseInt(st.nextToken());
			int y1 = Integer.parseInt(st.nextToken());
			int x2 = Integer.parseInt(st.nextToken());
			int y2 = Integer.parseInt(st.nextToken());
			
			int x3 = Integer.parseInt(st.nextToken());
			int y3 = Integer.parseInt(st.nextToken());
			int x4 = Integer.parseInt(st.nextToken());
			int y4 = Integer.parseInt(st.nextToken());
			
			if(x2 < x3 || x4 < x1 || y1 > y4 || y3 > y2) {
				System.out.println("d");
			} else if((x2 == x3 && y2 == y3) || (x4 == x1 && y4 == y1) || (x2 == x3 && y1 == y4) || (x4 == x1 && y3 == y2)) {
                System.out.println("c");
            }
            else if(y1 == y4 || y3 == y2 || x2 == x3 || x4 == x1) {
                System.out.println("b");
            }
            else {
                System.out.println("a");
            }
			
//			int minX = Math.min(x1, x3);
//			int minY = Math.min(y1, y3);
//			int maxX = Math.max(x2, x4);
//			int maxY = Math.max(y2, y4);
//			map = new int[maxY - minY][maxX - minX];
//
//			for(int j = maxY - minY - (y2 - minY); j < maxY - minY - (y2 - minY) + y2 - y1; j++) {
//				for(int k = x1 - minX; k < x2 - minX; k++) {
//					map[j][k] = 1;
//				}
//			}
//			
//			int cnt2 = 0;
//
//			for(int j = maxY - minY - (y4 - minY); j < maxY - minY - (y4 - minY) + y4 - y3; j++) {
//				for(int k = x3 - minX; k < x4 - minX; k++) {
//					if(map[j][k] == 1) {
//						map[j][k] = 2;
//						cnt2++;
//					}				
//				}
//			}
//			
////			System.out.printf("cnt1: %d | cnt2: %d%n", cnt, cnt2);
//			if(cnt2 >= 2) {
//				System.out.println("a");
//			} else if(cnt2 == 1) {
//				System.out.println("c");
//			} else {			
//				if(x1 == x3 || y1 == y3 || x2 == x4 || y2 == y4 || x1 == x4 || y1 == y4 || x2 == x3 || y2 == y3) {
//					System.out.println("b");
//				} else {
//					System.out.println("d");
//				}				
//			}
		}	
	}
}
