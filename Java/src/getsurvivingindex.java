import java.util.ArrayList;

public class getsurvivingindex {
		public static int getSurvivingIndex(int n, int k) {
				ArrayList<Integer> peopleList = new ArrayList<> ();

				// 사람 수에 따른 ArrayList 만들기

				for (int i = 1; i <= n; i++) {
						peopleList.add(i);
				}

				int listSize = peopleList.size(); //20

				// 죽는 순서 출력
				int count = 0;
				for (int i = 1; i <= n; i++) {
						for (int j = 1; j <= k; j++) {
								if (listSize == count) {
										count -= count;
								}
								count += 1;
								if (peopleList.get(count - 1) != 0) {
										continue;
								} else {
										j -= 1;
								}
						}
						if (i == n) {
								break;
						} else {
								System.out.println(count + "번 군사가 죽었습니다.");
								peopleList.set(count - 1, 0);
						}
				}
				return count;
		}

		public static void main(String[] args) {
				System.out.println("김신은 " + getSurvivingIndex(20, 5) + "번 자리에 서있으면 됩니다.");
		}
}
