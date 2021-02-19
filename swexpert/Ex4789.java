import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
/*
 * 성공적인 공연 기획
 */
public class Ex4789 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));        
        int T = Integer.parseInt(br.readLine());
        for(int i = 1; i <= T; i++) {
            String s = br.readLine();
            
            int curClap = s.charAt(0) - '0';
            int people = 0;
            
            for(int j = 1; j < s.length(); j++) {
            	if(s.charAt(j) != '0') {
            		if(curClap >= j) {
            			curClap += s.charAt(j) - '0';
            		} else {
            			people += (j - curClap);
            			curClap += s.charAt(j) - '0' + (j - curClap);
            		}
            	}
            	System.out.println(curClap);
            }            
            System.out.println("#" + i + " " + people);
        }   
    }
}