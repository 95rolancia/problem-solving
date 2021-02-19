import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
 
public class Ex5356 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));        
        int T = Integer.parseInt(br.readLine());
        for(int i = 1; i <= T; i++) {
            char[][] arr = new char[5][15];
            for(int j = 0; j < 5; j++) {
                String s = br.readLine();
                for(int k = 0; k < s.length(); k++) {
                    arr[j][k] = s.charAt(k);
                }
            }
             
            System.out.print("#" + i + " ");
            for(int j = 0; j < 15; j++) {
                for(int k = 0; k < 5; k++) {
                    if(arr[k][j] == 0) {
                        continue;
                    } else {
                        System.out.print(arr[k][j]);
                    }       
                }
            }
            System.out.println();
        }   
    }
}