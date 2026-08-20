package com.LKPro;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;
public class AddingServ extends HttpServlet{
    static final String url ="jdbc:mysql://localhost:3306/lakshmikandan";
    static final String userName = "root";
    static final String password = "Lakshmanan@02";
    public void doPost(HttpServletRequest req,HttpServletResponse res)throws ServletException,IOException{
    	 res.setContentType("text/html");
    	PrintWriter out = res.getWriter();
//    	out.println("<h1 style="+"color:red"+">Rsult is : "+"</h1>");
    	try {
    		Class.forName("com.mysql.cj.jdbc.Driver");
    	    String querry = "SELECT * FROM Backnow";
    	    Connection con = DriverManager.getConnection(url, userName, password);
    	    Statement st = con.createStatement();
    	    ResultSet rs = st.executeQuery(querry);
    	    out.println("<html><head>");
    	    out.println("<link rel='stylesheet' type='text/css' href='style.css'>");
    	    out.println("</head><body>");
    	    out.println("<table border='2' align='center' cellpadding='10'>");
    	    out.println("<tr>");
    	    out.println("<th>ID</th>");
    	    out.println("<th>ROLL ID</th>");
    	    out.println("<th>Name</th>");
    	    out.println("<th>Age</th>");
    	    out.println("<th>Gender</th>");
    	    out.println("<th>Sport</th>");
    	    out.println("<th>State</th>");
    	    out.println("</tr>");
    	    while(rs.next()){
    	    	out.print("<tr>");
    	    	out.print("<td>" + rs.getInt(1) + "</td>");
    	    	out.print("<td>" + rs.getInt(2) + "</td>");
    	    	out.print("<td>" + rs.getString(3) + "</td>");
    	    	out.print("<td>" + rs.getInt(4) + "</td>");
    	    	out.print("<td>" + rs.getString(5) + "</td>");
    	    	out.print("<td>" + rs.getString(6) + "</td>");
    	    	out.print("<td>" + rs.getString(7) + "</td>");
    	    	out.print("</tr>");
    	        out.println("</body>");
    	        out.println("</html>");
    	    	}
    	        rs.close();
    	        st.close();
    	        con.close();
    	                     }
    	catch(SQLException e){
    		   out.println("<html><head>");
       	    out.println("<link rel='stylesheet' type='text/css' href='style.css'>");
       	    out.println("</head><body>");
    		out.println("<h2 style='color:red'> Database error : " + e.getMessage()+"</h2>");
    		  out.println("</body>");
  	        out.println("</html>");
                                 }
    	catch(ClassNotFoundException e){
    		}
    	}
    }