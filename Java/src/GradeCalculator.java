import java.util.ArrayList;

public class GradeCalculator {
	public final String name;
	private double currentScore;
	private int currentCredit;

	private final ArrayList<Course> courses = new ArrayList<> ();

	public GradeCalculator(String name, double currentScore, int currentCredit) {
		this.name = name;
		this.currentScore = currentScore;
		this.currentCredit = currentCredit;
	}

	public void addCourse(Course course) {
		courses.add(course);
	}

	public void print() {
		System.out.println("직전 학기 성적: " + currentScore + " (총 " + currentCredit + "학점)");
		
		double scoreSum = 0;
		int creditSum = 0;
		for (Course c : courses) {
			scoreSum += c.getScore() * c.credit;
			creditSum += c.credit;
		}
		double scoreSum1 = Double.parseDouble(String.format("% .10f", scoreSum / creditSum));


		System.out.println("이번 학기 성적: " + scoreSum1 + " (총 " + creditSum + "학점)");

		int totalCredit = currentCredit + creditSum;
		double totalScore = ((currentScore * currentCredit) + scoreSum);
		double totalScore1 = Double.parseDouble(String.format("% .10f", totalScore / totalCredit));


		System.out.println("전체 예상 학점: " + totalScore1 + " (총 " + totalCredit + "학점)");

	}
}
