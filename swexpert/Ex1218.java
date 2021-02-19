import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;

public class Ex1218 {
	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		Stack<Character> stk = new Stack<>();
		
		for(int t = 0; t < 10; t++) {
			int length = Integer.parseInt(br.readLine());
			String target = br.readLine();
			
			char start = target.charAt(0);
			if(start == '>' || start == '}' || start ==']' || start == ')') {
				System.out.printf("#%d %d%n", t + 1, 0);
				continue;
			} else {
				stk.push(start);
			}
			
			for(int i = 1; i < length; i++) {
				char ch = target.charAt(i);
				if(ch == '(' || ch == '<' || ch == '{' || ch == '[') {
					stk.push(ch);
				} else {
					if(stk.peek() == '{' && ch == '}') {
						stk.pop();
					} else if(stk.peek() == '(' && ch == ')') {
						stk.pop();
					} else if(stk.peek() == '<' && ch == '>') {
						stk.pop();
					} else if(stk.peek() == '[' && ch == ']') {
						stk.pop();
					} else {
						break;
					}
				}
			}
			
			if(stk.empty()) {
				System.out.printf("#%d %d%n", t + 1, 1);
			} else {
				System.out.printf("#%d %d%n", t + 1, 0);
			}
			stk.clear();
		}	
	}
}
