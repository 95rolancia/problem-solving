import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.StringTokenizer;

public class Ex3499 {
	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = null;
		int tc = Integer.parseInt(br.readLine());
		for (int i = 0; i < tc; i++) {	
			int length = Integer.parseInt(br.readLine());
			boolean isOdd = false;
			StringBuilder sb = new StringBuilder();
			
			ArrayList<String> deck1 = new ArrayList<>();
			ArrayList<String> deck2 = new ArrayList<>();
			st = new StringTokenizer(br.readLine());
			
			int endPoint;
			if(length % 2 == 0) {
				endPoint = length / 2 - 1;
				isOdd = true;
			} else {
				endPoint = length / 2;
			}

			for(int j = 0; j <= endPoint ; j++) {
				deck1.add(st.nextToken());
			}
			
			for(int j = endPoint + 1; j < length; j++) {
				deck2.add(st.nextToken());
			}
			
			for(int j = 0; j <= endPoint; j++) {
				sb.append(deck1.get(j) + " ");
				if(j == endPoint && !isOdd) break;
				sb.append(deck2.get(j) + " ");
			}
			
			System.out.printf("#%d ", i + 1);
			System.out.println(sb);
		}		
	}

}