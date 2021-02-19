import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Stack;

public class Ex1223 {
	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		Stack<Character> stk = new Stack<>();
		ArrayList<Character> list = new ArrayList<>();
		
		for (int t = 1; t <= 1; t++) {	
			int length = Integer.parseInt(br.readLine());			
			String input = br.readLine();
			
			for(int i = 0; i < length; i++) {
				char ch = input.charAt(i);
				if(Character.isDigit(ch)) {
					list.add(ch);
				} else {
					while(!stk.empty() && priority(stk.peek()) >= priority(ch)) {
						list.add(stk.pop());
					}
					stk.push(ch);
				} 
					
			}
			
			while(!stk.empty()) list.add(stk.pop());
					
			System.out.printf("#%d %d%n", t, calc(list));
			list.clear();		
		}		
	}
	
	static int priority(char c) {
		if(c == '+') return 1;
		else return 2;
	}
	
	static int calc(ArrayList<Character> list) {
		Stack<Integer> stk = new Stack<>();
		for(int i = 0; i < list.size(); i++) {
			char ch = list.get(i);
			if(Character.isDigit(ch)) {
				stk.push((int) ch - '0');
			} else {
                int num1 = stk.pop();
                int num2 = stk.pop();
           
                int result = 0 ;
                switch(ch) {
                case '+' :
                    result = num2 + num1;
                    break;
                case '*' :
                    result = num2 * num1;
                    break;
                }
                stk.push(result);             
			}
		}
		int result = stk.pop();
		return result;
	}
}