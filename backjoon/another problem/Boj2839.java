import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Boj2839 {	
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int n = Integer.parseInt(br.readLine());
//		int temp = n;
//		int temp2 = temp;
////		1. n�� 5�� ������ ������ ��
//		if(n % 5 == 0) {
//			System.out.println(n / 5);
//			return;
//		}
////		2. 5�� ������ 3�� �������� ���� ��
//		int cnt = 0;
//		while(n > 0) {
//			n -= 5;
//			cnt++;
//			if(n > 0 && n < 15 && n % 3 == 0) {
//				System.out.println(cnt + (n / 3));
//				return;
//			}
//		}
////		3. 5�� ������ 3�� ������ ���� ��
//		if(temp % 8 == 0) {
//			System.out.println(temp / 4);
//			return;
//		}
////		4. n�� 3���� ������ ������ ��
//		if(temp2 % 3 == 0) {
//			System.out.println(temp2 / 3);
//			return;
//		}
////	    5. 3�� 5�� �������� ���� �� ���� ��
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
