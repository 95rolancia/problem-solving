import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Ex1873 {
	static int tankX, tankY, width, height;
	static char[][] map;

	public static void main(String[] args) throws NumberFormatException, IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int t = Integer.parseInt(br.readLine());
		StringTokenizer st;
		for (int i = 0; i < t; i++) {
			st = new StringTokenizer(br.readLine(), " ");
			height = Integer.parseInt(st.nextToken());
			width = Integer.parseInt(st.nextToken());
			map = new char[height][width];

			for (int j = 0; j < height; j++) {
				String element = br.readLine();
				for (int k = 0; k < width; k++) {
					map[j][k] = element.charAt(k);
//					탱크 위치 저장
					if (map[j][k] == '<' || map[j][k] == '>' || map[j][k] == '^' || map[j][k] == 'v') {
						tankX = j;
						tankY = k;
					}
				}
			}

			@SuppressWarnings("unused")
			int commandNum = Integer.parseInt(br.readLine());
			String command = br.readLine();

			simulation(command);
			
			System.out.printf("#%d ", i + 1);
			for (int j = 0; j < height; j++) {
				System.out.println(map[j]);
			}
		}
	}

	static void simulation(String command) {
		for (int i = 0; i < command.length(); i++) {
			switch (command.charAt(i)) {
			case 'U':
				moveUp();
				break;
			case 'D':
				moveDown();
				break;
			case 'L':
				moveLeft();
				break;
			case 'R':
				moveRight();
				break;
			case 'S':
				shoot();
				break;	
			}
		}
	}

	static void moveUp() {
		if (tankX - 1 < 0 || map[tankX - 1][tankY] != '.') {
			map[tankX][tankY] = '^';
			return;
		}
		map[tankX][tankY] = '.';
		map[--tankX][tankY] = '^';
	}

	static void moveDown() {
		if (tankX + 1 >= height || map[tankX + 1][tankY] != '.') {
			map[tankX][tankY] = 'v';
			return;
		}
		map[tankX][tankY] = '.';
		map[++tankX][tankY] = 'v';
	}

	static void moveLeft() {
		if (tankY - 1 < 0 || map[tankX][tankY - 1] != '.') {
			map[tankX][tankY] = '<';
			return;
		}
		map[tankX][tankY] = '.';
		map[tankX][--tankY] = '<';
	}

	static void moveRight() {
		if (tankY + 1 >= width || map[tankX][tankY + 1] != '.') {
			map[tankX][tankY] = '>';
			return;
		}
		map[tankX][tankY] = '.';
		map[tankX][++tankY] = '>';
	}

	static void shoot() {
		int bulletX = tankX;
		int bulletY = tankY;

		if (map[bulletX][bulletY] == '^') {
			while(bulletX > 0) {
				if(map[bulletX - 1][bulletY] == '#') break;
				if(map[bulletX - 1][bulletY] == '-' || map[bulletX - 1][bulletY] == '.') {
					bulletX--;
					continue;
				}
				if(map[bulletX - 1][bulletY] == '*') {
					map[bulletX - 1][bulletY] = '.';
					break;
				}
			}
		} else if(map[bulletX][bulletY] == 'v') {
			while(bulletX < height - 1) {
				if(map[bulletX + 1][bulletY] == '#') break;
				if(map[bulletX + 1][bulletY] == '-' || map[bulletX + 1][bulletY] == '.') {
					bulletX++;
					continue;
				}
				if(map[bulletX + 1][bulletY] == '*') {
					map[bulletX + 1][bulletY] = '.';
					break;
				}
			}

		} else if(map[bulletX][bulletY] == '>') {
			while(bulletY < width - 1) {
				if(map[bulletX][bulletY + 1] == '#') break;
				if(map[bulletX][bulletY + 1] == '-' || map[bulletX][bulletY + 1] == '.') {
					bulletY++;
					continue;
				}
				if(map[bulletX][bulletY + 1] == '*') {
					map[bulletX][bulletY + 1] = '.';
					break;
				}
			}

		} else if(map[bulletX][bulletY] == '<') {
			while(bulletY > 0) {
				if(map[bulletX][bulletY - 1] == '#') break;
				if(map[bulletX][bulletY - 1] == '-' || map[bulletX][bulletY - 1] == '.') {
					bulletY--;
					continue;
				}
				if(map[bulletX][bulletY - 1] == '*') {
					map[bulletX][bulletY - 1] = '.';
					break;
				}
			}
		}
	}
}
