package com.pricetra.email_server.controllers;

import com.pricetra.email_server.dto.PasswordResetRequest;
import com.pricetra.email_server.response.PasswordResetResponse;
import com.sendgrid.Response;
import com.sendgrid.helpers.mail.Mail;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
public class PasswordResetController extends BaseController {
    @PostMapping("password-reset")
    public PasswordResetResponse sendPasswordResetCode(@RequestBody PasswordResetRequest params) throws IOException {
        String html = getTemplateAsString("password-reset.html")
                .replace("{{fullName}}", params.fullName)
                .replace("{{avatarUrl}}", params.avatarUrl)
                .replace("{{code}}", params.code);
        Mail mail = this.newHtmlMailer(noReplyEmail, params.recipientEmail, "Password Reset Code", html);
        Response emailResponse = this.sendEmail(mail);
        PasswordResetResponse res = new PasswordResetResponse();
        res.content = html;
        res.status = Integer.toString(emailResponse.getStatusCode());
        res.code = params.code;
        res.fullName = params.fullName;
        res.avatarUrl = params.avatarUrl;
        res.subject = mail.subject;
        res.recipientEmail = params.recipientEmail;
        return res;
    }
}
