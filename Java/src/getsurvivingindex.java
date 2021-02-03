import java.util.ArrayList;

public class getsurvivingindex {
		public static int getSurvivingIndex(int n, int k) {
				ArrayList<Integer> peopleList = new ArrayList<> ();

				// 사람 수에 따른 ArrayList 만들기

				for (int i = 1; i <= n; i++) {
						peopleList.add(i);
				}

				// 죽는 순서 출력
				int count = k;
				int break_count = 0;
				while (break_count == 0) {
						if (peopleList.size() == 1) {
								break_count += 1;
						} else {
								System.out.println(count + "번 군사가 죽습니다.");
								peopleList.remove(count);
								count += k;
								if (count > peopleList.size()) {
										count -= peopleList.size();
								} 
						}
				}

				return count;
		}

		public static void main(String[] args) {
				System.out.println("김신은 " + getSurvivingIndex(20, 5) + "번 자리에 서있으면 됩니다.");
		}
}
