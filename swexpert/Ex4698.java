import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;
/*
 * 테네스의 특별한 소수
 */
public class Ex4698 {
	static boolean prime[] = new boolean[1000001];
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));     
        StringTokenizer st = null;
        
        int tc = Integer.parseInt(br.readLine());
        for(int t = 1; t <= tc; t++) {
        	st = new StringTokenizer(br.readLine(), " ");
            String D = st.nextToken();
            int start = Integer.parseInt(st.nextToken());
            int end = Integer.parseInt(st.nextToken());
            
            getPrime();
            int cnt = 0;
            for(int i = start; i <= end; i++) {
            	if(prime[i] == true && Integer.toString(i).contains(D)) {
            		cnt++;
            	}
            }
                    
            System.out.println("#" + t + " " + cnt);
        }   
    }
    
    static void getPrime() {
    	prime[0] = prime[1] = false;
    	for(int i = 2; i <= 1000000; i += 1) {
    		prime[i] = true;
        }
 
        //2 부터 숫자를 키워가며 배수들을 제외(false 할당)
        for(int i = 2; i * i <= 1000000; i += 1) {
            for(int j = i * i; j <= 1000000; j += i) {
            	prime[j] = false;        //2를 제외한 2의 배수 false
            }
        }
    }
    
}