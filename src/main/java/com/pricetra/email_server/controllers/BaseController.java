package com.pricetra.email_server.controllers;

import com.pricetra.email_server.dto.EmailVerificationRequest;
import com.sendgrid.Method;
import com.sendgrid.Request;
import com.sendgrid.Response;
import com.sendgrid.SendGrid;
import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.Content;
import com.sendgrid.helpers.mail.objects.Email;
import org.springframework.core.io.ClassPathResource;

import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;

public class BaseController {
    protected final SendGrid sg = new SendGrid(System.getenv("SENDGRID_API_KEY"));
    protected final String noReplyEmail = "no-reply@pricetra.com";

    public Mail newHtmlMailer(String fromEmail, String recipientEmail, String subject, String html) {
        Email from = new Email(fromEmail, "Pricetra");
        Email to = new Email(recipientEmail);
        Content content = new Content("text/html", html);
        return new Mail(from, subject, to, content);
    }

    public Response sendEmail(Mail mail) throws IOException {
        Request request = new Request();
        request.setMethod(Method.POST);
        request.setEndpoint("mail/send");
        request.setBody(mail.build());
        return sg.api(request);
    }

    public String getTemplateAsString(String templateFileName) throws IOException {
        Charset charset = StandardCharsets.UTF_8;
        return new ClassPathResource("email-templates/" + templateFileName)
                .getContentAsString(charset);
    }
}
