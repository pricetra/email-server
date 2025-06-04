package com.pricetra.email_server.controllers;

import com.pricetra.email_server.dto.EmailVerificationRequest;
import com.pricetra.email_server.response.EmailVerificationResponse;
import com.pricetra.email_server.response.EmailResponse;
import com.sendgrid.helpers.mail.Mail;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.sendgrid.*;

import java.io.IOException;

@RestController
public class EmailVerificationController extends BaseController {
    @PostMapping("/email-verification")
    public EmailResponse sendEmailVerificationCode(@RequestBody EmailVerificationRequest params) throws IOException {
        String html = getTemplateAsString("email-verification.html")
                .replace("{{code}}", params.code)
                .replace("{{name}}", params.name);
        Mail mail = this.newHtmlMailer(noReplyEmail, params.recipientEmail, "Email Verification Code", html);

        Response emailResponse = sendEmail(mail);
        EmailVerificationResponse res = new EmailVerificationResponse();
        res.content = html;
        res.status = Integer.toString(emailResponse.getStatusCode());
        res.code = params.code;
        res.name = params.name;
        res.subject = mail.subject;
        res.recipientEmail = params.recipientEmail;
        return res;
    }
}
