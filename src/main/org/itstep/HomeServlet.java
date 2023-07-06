package org.itstep;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;

public class HomeServlet extends HttpServlet {

    @Override
    public void init() throws ServletException {
        super.init();
        System.out.println("inside init()");
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("inside doGet()");

        PrintWriter writer = resp.getWriter();
        writer.println("hello from servlet, server time is " + new Date());
    }

    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.service(req, resp);
        System.out.println("inside service()");
    }

    @Override
    public void destroy() {
        super.destroy();
        System.out.println("inside destroy()");
    }
}
