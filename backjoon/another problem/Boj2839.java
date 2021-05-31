import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Boj2839 {	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int n = Integer.parseInt(br.readLine());
//		int temp = n;
//		int temp2 = temp;
////		1. n이 5로 나누어 떨어질 때
//		if(n % 5 == 0) {
//			System.out.println(n / 5);
//			return;
//		}
////		2. 5의 개수가 3의 개수보다 많을 때
//		int cnt = 0;
//		while(n > 0) {
//			n -= 5;
//			cnt++;
//			if(n > 0 && n < 15 && n % 3 == 0) {
//				System.out.println(cnt + (n / 3));
//				return;
//			}
//		}
////		3. 5의 개수와 3의 개수가 같을 때
//		if(temp % 8 == 0) {
//			System.out.println(temp / 4);
//			return;
//		}
////		4. n이 3으로 나누어 떨어질 때
//		if(temp2 % 3 == 0) {
//			System.out.println(temp2 / 3);
//			return;
//		}
////	    5. 3과 5의 조합으로 만들 수 없을 때
//		System.out.println("-1");
		
		int answer = 0;
		while(true) {
			if(n % 5 == 0) {
				answer += (n / 5);
				break;
			}
			n -= 3;
			answer++;
			if(n < 0) {
				
				answer = -1;
				break;
			}
		}
		System.out.println(answer);
	}
}
