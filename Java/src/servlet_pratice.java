import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;

public class servlet_practice extends HttpServlet {
  public void service(HttpServletRequest request, HttpServletResponse response)
    throws IOException, ServletException{
    System.out.println("hello Servlet");
  }
}