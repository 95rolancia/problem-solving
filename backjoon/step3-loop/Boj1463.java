import java.io.*;
import java.util.*;

public class Boj1463 {
	static final BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
	static final BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
	static int stoi(String str) {return Integer.parseInt(str);}

	static int[] d;
	public static void main(String[] args) throws NumberFormatException, IOException {		
		int N = stoi(br.readLine());
		d = new int[N + 2];
		
		d[1] = 0;
		d[2] = 1;
		for(int i = 3; i <= N; i++) {
			d[i] = d[i - 1] + 1;
			if(i % 2 == 0) {
				if(d[i] > d[i / 2] + 1) {
					d[i] = d[i / 2] + 1;
				}	
			}
			
			if(i % 3 == 0) {
				if(d[i] > d[i / 3] + 1) {
					d[i] = d[i / 3] + 1;
				}
			}
		}
		
		bw.write(Integer.toString(d[N]));	
		bw.close();
		br.close();
	}
}