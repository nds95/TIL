import java.util.ArrayList;

public class Course{
	public final int CREDIT_MAJOR = 3;
	public final int CREDIT_GENERAL = 2;
	
	public ArrayList<String> lecture;
	public ArrayList<String> score;
	public ArrayList<integer> credit;

	public Course(String lecture, int credit, String score) {
		this.lecture.add(lecture);
		this.score.add(score);
		this.credit.add(credit);
	}
}
